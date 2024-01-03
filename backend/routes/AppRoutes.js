import { Router } from "express";
import conn from "../db/db.js";


const router = Router()

router.get('/',async(req,res)=>{
  res.send("este es el home")
})


router.post('/api/pedidos',async(req,res)=>{
  const {idPedido,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado,productosCta} = req.body;
  
  //armado de la query de los productos cta
  const valuesProductsCta = productosCta.map(item=> `("${item.idProducto}","${idPedido}",${item.cantidad})`);
  const stringProductosCta = valuesProductsCta.join(',');
  const sentenciaProductosCta = "INSERT INTO productoscta (idProducto,idPedido,cantidad) VALUES ";
  const consultaProductos = sentenciaProductosCta.concat(stringProductosCta);

  if(estado === "pagado"){
    const {idVenta,ingresos} = req.body;
    console.log('es una venta')
    const valuesIngresos = ingresos.map(item=> `("${idVenta}",${item.monto},"${item.medio}","${fechaPedido}",${mes})`);
    const stringIngresos = valuesIngresos.join(',');
    const sentenciaIngresos = "INSERT INTO ingresosVentas (idVenta,monto,medio,fecha,mes) VALUES ";
    const consultaIngresos = sentenciaIngresos.concat(stringIngresos);

    try{
      await conn.execute("INSERT INTO pedidos (id,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado) VALUES (?,?,?,?,?,?,?,?,?,?)",[idPedido,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado])
      .then(response1=>{
        console.log('pedido ingresado')
        return conn.execute(consultaProductos)
      })
      .then(response2=>{
        console.log('productos cta ingresados')
        return conn.execute("INSERT INTO ventas (id,idPedido) VALUES (?,?)",[idVenta,idPedido])
      })
      .then(response3=>{
        console.log('venta registrada')
        return conn.execute(consultaIngresos)
      })
      .then(response4=>{
        return res.status(200).json({message:"pedido ingresado"})
      })
    
    }catch(err){
      console.log(err)
      res.status(400).json({message:err})
    }

  }else if(estado === "pendiente de pago"){
    console.log("es pendiente de pago");    
    try{
      await conn.execute("INSERT INTO pedidos (id,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado) VALUES (?,?,?,?,?,?,?,?,?,?)",[idPedido,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado])
      .then(response1=>{
        console.log('pedido ingresado')
        return conn.execute(consultaProductos)
      })
      .then(response2=>{
        console.log('productos cta ingresados')
        return conn.execute("INSERT INTO cobrosPendientes (idPedido,monto) VALUES (?,?)",[idPedido,total])
      })
      .then(response3=>{
        console.log('cobro pendiente ingresado')
        return res.status(200).json({message:"pedido ingresado"})
      })
    }catch(err){
      console.log(err)
      res.status(400).json({message:err})
    }
  }else if(estado === "pagado parcialmente"){
    console.log("es pagado parcialmente")
    
    const {idVenta,ingresos,cobroPendiente} = req.body;
    console.log('es una venta')
    const valuesIngresos = ingresos.map(item=> `("${idVenta}",${item.monto},"${item.medio}","${fechaPedido}",${mes})`);
    const stringIngresos = valuesIngresos.join(',');
    const sentenciaIngresos = "INSERT INTO ingresosVentas (idVenta,monto,medio,fecha,mes) VALUES ";
    const consultaIngresos = sentenciaIngresos.concat(stringIngresos);
    try{
      await conn.execute("INSERT INTO pedidos (id,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado) VALUES (?,?,?,?,?,?,?,?,?,?)",[idPedido,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado])
      .then(response1=>{
        console.log('pedido ingresado')
        return conn.execute(consultaProductos)
      })
      .then(response2=>{
        console.log('productos cta ingresados')
        return conn.execute("INSERT INTO ventas (id,idPedido) VALUES (?,?)",[idVenta,idPedido])
      })
      .then(response3=>{
        console.log('venta registrada')
        return conn.execute(consultaIngresos)
      })
      .then(response4=>{
        console.log('ingresos registrados')
        return conn.execute("INSERT INTO cobrosPendientes (idPedido,monto) VALUES (?,?)",[idPedido,cobroPendiente])
      })
      .then(response5=>{
        console.log('cobro pendiente registrado')
        return res.status(200).json({message:"pedido ingresado"})
      })

    }catch(err){
      console.log(err)
      res.status(400).json({message:err})
    }
  }
})



//PRODUCTOS
/*ruta para obtener todos los productos*/
router.get('/api/products',async(req,res)=>{
  try{
    const response = await conn.execute("SELECT * FROM productos")
    res.json({ok:true,data:response.rows})
  }catch(err){
    res.json({ok:false,message:err})
  }
})

//CREAR UN NUEVO PRODUCTO l
router.post('/api/products',async(req,res)=>{
  const {id,nombre,precio} = req.body
  try{
    await conn.execute("INSERT INTO productos (id,nombre,precio) VALUES (?,?,?)",[id,nombre,precio])
    res.status(200).json({message: 'Producto insertado correctamente' });
  }catch(err){
    res.status(400).json({ error: 'Error al insertar el producto' });
  }
})


//CLIENTES
/*ruta para obtener todos los clientes*/
router.get('/api/clients',async(req,res)=>{
  try{
    const response = await conn.execute("SELECT * FROM clientes")
    res.json({ok:true,data:response.rows})
  }catch(err){
    res.json({ok:false,message:err})
  }
})

//AGREGAR UN NUEVO CLIENTE
router.post('/api/clients', async(req,res)=>{
  const {id,nombre,direccion,telefono,redes} = req.body;
  try{
    await conn.execute("INSERT INTO clientes (id,nombre,direccion,telefono,redes) VALUES (?,?,?,?,?)",[id,nombre,direccion,telefono,redes])
    res.status(200).json({ message: 'Cliente ingresado correctamente' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar el cliente' });
  }
})


//PEDIDOS

//computar un pedido basico
router.post('/api/pedidods',async(req,res)=>{
  const {id,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado} = req.body;
  try{
    await conn.execute("INSERT INTO pedidos (id,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado) VALUES (?,?,?,?,?,?,?,?,?,?)",[id,idCliente,estado,mes,fechaEntrega,fechaPedido,subtotal,descuento,total,entregado])
    res.status(200).json({message: 'Pedido ingresado' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar el pedido' });
  }
})

//////////////////////////////////

router.post('/api/productoscta', async (req, res) => {
  const clientes = req.body; // Obtener el array de objetos del cuerpo de la solicitud
  const values = clientes.map(item => `("${item.idProducto}","${item.idPedido}",${item.cantidad})`);
  const string = values.join(',');
  const sentencia = "INSERT INTO productoscta (idProducto,idPedido,cantidad) VALUES "
  const consulta = sentencia.concat(string)
  console.log(consulta)
  try{
    await conn.execute(consulta)
    res.status(200).json({message: 'Productos cta ingresados' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar los productos cta' });
  }
  //res.status(200).json({message: 'correctamente' });
});

//seccion del pago del pedido
//PAGADO
router.post('/api/ventas',async(req,res)=>{
  const {id,idPedido} = req.body;
  try{
    await conn.execute("INSERT INTO ventas (id,idPedido) VALUES (?,?)",[id,idPedido])
    res.status(200).json({message: 'venta ingresada correctamente' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar la venta' });
  }
})

router.post('/api/ingresosVentas',async(req,res)=>{
  const ingresos = req.body; // Obtener el array de objetos del cuerpo de la solicitud
  const values = ingresos.map(item => `("${item.idVenta}",${item.monto},"${item.medio}","${item.fecha}",${item.mes})`);
  const string = values.join(',');
  const sentencia = "INSERT INTO ingresosVentas (idVenta,monto,medio,fecha,mes) VALUES "
  const consulta = sentencia.concat(string)
  try{
    await conn.execute(consulta)
    res.status(200).json({message: 'Ingresos ventas ingresados correctamentee' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar los ingresos ventas' });
  }

})

//PENDIENTE DE PAGO 

router.post('/api/cobrosPendientes', async(req,res)=>{
  const {idPedido,monto} = req.body
  try{
    await conn.execute("INSERT INTO cobrosPendientes (idPedido,monto) VALUES (?,?)",[idPedido,monto])
    res.status(200).json({message: 'Cobro insertado correctamente' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar el cobro' });
  }

})

/// ruta para insertar un retiro de dinero

router.post('/api/retiros',async(req,res)=>{
  const ingresos = req.body; // Obtener el array de objetos del cuerpo de la solicitud
  const values = ingresos.map(item => `("${item.concepto}",${item.monto},"${item.fecha}",${item.mes},"${item.medio}","${item.id}")`);
  const string = values.join(',');
  const sentencia = "INSERT INTO retiros (concepto,monto,fecha,mes,medio,id) VALUES "
  const consulta = sentencia.concat(string)
  try{
    await conn.execute(consulta)
    res.status(200).json({message: 'retiro ingresado correctamentee' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar el retiro' });
  }

})

//ruta para ver los retiros

router.get('/api/retiros',async(req,res)=>{
  try{
    const response = await conn.execute("SELECT * FROM retiros")
    res.json({ok:true,data:response.rows})
  }catch(err){
    res.json({ok:false,message:err})
  }
})


//ruta para insertar un ingreso externo

router.post('/api/ingresosExt',async(req,res)=>{
  const ingresos = req.body; // Obtener el array de objetos del cuerpo de la solicitud
  const values = ingresos.map(item => `("${item.descripcion}",${item.monto},"${item.medio}","${item.fecha}",${item.mes},"${item.idExt}")`);
  const string = values.join(',');
  const sentencia = "INSERT INTO ingresosExt (descripcion,monto,medio,fecha,mes,idExt) VALUES "
  const consulta = sentencia.concat(string)
  try{
    await conn.execute(consulta)
    res.status(200).json({message: 'Ingresos externos ingresados correctamentee' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar los ingresos externos' });
  }

})


//ruta para insertar un gasto

router.post('/api/gastos',async(req,res)=>{
  const ingresos = req.body; // Obtener el array de objetos del cuerpo de la solicitud
  const values = ingresos.map(item => `("${item.descripcion}",${item.monto},"${item.medio}","${item.fecha}",${item.mes},"${item.id}")`);
  const string = values.join(',');
  const sentencia = "INSERT INTO gastos (descripcion,monto,medio,fecha,mes,id) VALUES "
  const consulta = sentencia.concat(string)
  try{
    await conn.execute(consulta)
    res.status(200).json({message: 'gastos ingresados correctamentee' });
  }catch(err){
    res.status(500).json({ error: 'Error al insertar los gastos' });
  }

})




router.get('/api/cobrosPendientes', async(req,res)=>{
  try{
    const response = await conn.execute("SELECT * FROM cobrosPendientes")
    res.json({ok:true,data:response.rows})
  }catch(err){
    res.json({ok:false,message:err})
  }

})


//seccion del




/*ruta para obtener las cosas del balance*/
router.post('/api/balance',async(req,res)=>{
  //necesitamos dos parametros: el mes actual y el mes pasado
  const {mesActual,mesPasado} = req.body
  try{
    const response = await conn.execute(
      `
       SELECT
        (SELECT valeAc FROM sueldos WHERE mes = ?) AS sueldo_vale,
        (SELECT renzoAc FROM sueldos WHERE mes = ?) AS sueldo_renzo,
        (SELECT SUM(monto) FROM ingresosExt WHERE mes = ?) AS ingresos_ext,
        (SELECT SUM(monto) FROM ingresosVentas WHERE mes = ?) AS ingresos_ventas,
        (SELECT SUM(monto) FROM cobrosPendientes) AS pagos_pendientes,
        (SELECT monto FROM ahorros WHERE mes = ?) AS ahorros,
        (SELECT SUM(monto) FROM retiros WHERE mes = ?) AS retiros,
        (SELECT SUM(monto) FROM gastos WHERE mes = ?) AS total_gastos;
      `,
      [mesPasado,mesPasado,mesActual,mesActual,mesActual,mesPasado,mesActual,mesActual] 
   )
   res.json({ok:true,data:response.rows})  
  }catch(err){
    res.json({ok:false})
  }
})


/*ruta para las entregas de hoy*/
router.post('/api/entregas',async(req,res)=>{
  const {fecha} = req.body;
  try{
    const resPedidos = await conn.execute("SELECT pedidos.id, pedidos.estado, pedidos.fechaPedido, pedidos.fechaEntrega, pedidos.subtotal, pedidos.descuento, pedidos.total, pedidos.entregado, clientes.nombre AS cliente,clientes.direccion,clientes.telefono,clientes.redes FROM pedidos JOIN clientes ON (pedidos.idCliente = clientes.id) WHERE pedidos.fechaEntrega = ?", [fecha])
    const resProductoscta = await conn.execute("SELECT productos.nombre, productos.precio, productoscta.cantidad,productoscta.idPedido FROM productos JOIN productoscta ON (productos.id = productoscta.idProducto) JOIN pedidos ON (pedidos.id = productoscta.idPedido) WHERE pedidos.fechaEntrega = ?",[fecha])

    const respuesta = resPedidos.rows.map((pedido)=>{
      const descripcion = resProductoscta.rows.filter((producto)=> producto.idPedido === pedido.id)
      return {...pedido,descripcion:[...descripcion]}
    })

    res.json({ok:true,data:respuesta})
  }catch(err){
    res.json({ok:false,message:err})
  }
})

//ruta para obtener los pedidos

router.get('/api/pedidos',async(req,res)=>{
  //const {fecha} = req.body;
  try{
    const resPedidos = await conn.execute("SELECT pedidos.id, pedidos.estado, pedidos.fechaPedido, pedidos.fechaEntrega, pedidos.subtotal, pedidos.descuento, pedidos.total, pedidos.entregado,pedidos.mes,clientes.nombre AS cliente,clientes.direccion,clientes.telefono,clientes.redes FROM pedidos JOIN clientes ON (pedidos.idCliente = clientes.id)")
    const resProductoscta = await conn.execute("SELECT productos.nombre, productos.precio, productoscta.cantidad,productoscta.idPedido FROM productos JOIN productoscta ON (productos.id = productoscta.idProducto) JOIN pedidos ON (pedidos.id = productoscta.idPedido)")
    const resVentas = await conn.execute("SELECT * FROM ventas")
    const resIngresos = await conn.execute("SELECT * FROM ingresosVentas")
    const resCobrosPendientes = await conn.execute("SELECT * FROM cobrosPendientes")

    const respuesta = resPedidos.rows.map((pedido)=>{
      const descripcion = resProductoscta.rows.filter((producto)=> producto.idPedido === pedido.id)
      
      const venta = resVentas.rows.find((venta)=>venta.idPedido === pedido.id)
      if(venta){
        const cobroPendiente = resCobrosPendientes.rows.find((cobro)=>cobro.idPedido === pedido.id)
        if(cobroPendiente){
          const ingresosVentas = resIngresos.rows.filter((ingreso)=>ingreso.idVenta === venta.id)
          return {...pedido,descripcion:[...descripcion],montosPagados:[...ingresosVentas],cobroPendiente:cobroPendiente.monto}
        }else{
          const ingresosVentas = resIngresos.rows.filter((ingreso)=>ingreso.idVenta === venta.id)
          return {...pedido,descripcion:[...descripcion],montosPagados:[...ingresosVentas],cobroPendiente:0}
        }
      }else{        
        return {...pedido,descripcion:[...descripcion],montosPagados:[],cobroPendiente:pedido.total}
      }
    })

    res.json({ok:true,data:respuesta})
  }catch(err){
    res.json({ok:false,message:err})
  }
})

//ruta para los ingresos 

router.get('/api/ingresos',async(req,res)=>{

  //esto ya esta ordenado

  try{
    const resIngresosVentas = await conn.execute("SELECT * FROM ingresosVentas");
    const resIngresosExt = await conn.execute("SELECT * FROM ingresosExt");

    const dataIV = resIngresosVentas.rows.map((item)=>{
      return {...item,descripcion:null,idExt:null}
    })
    const dataIE = resIngresosExt.rows.map((item)=>{
      return {...item,idVenta:null}
    }) 

    const arreglo = dataIE.concat(dataIV)
    const data = arreglo.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    res.json({ok:true,data:data})

  }catch(err){
    res.json({ok:false,message:err})
  }
})


/*ruta para obtener los gastos*/

router.get('/api/gastos',async(req,res)=>{
  try{
    const data = await conn.execute("SELECT * FROM gastos")
    const arreglo = data.rows
    const filterData = arreglo.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    res.json({ok:true,data:filterData})
  }catch(err){
    res.json({ok:false,message:err})
  }

})


/*ruta para cambiar el estado a entregado*/
router.put('/api/entregado',async(req,res)=>{
  const {id} = req.body
  try{
    await conn.execute("UPDATE pedidos SET entregado = 'si' WHERE id = ?",[id])
    res.status(200)
  }catch(err){
    res.status(400)
  }
})

export default router;