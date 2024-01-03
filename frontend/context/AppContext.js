import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) =>{
  const [login,setLogin] = useState(false);
  const [loading,setLoading] = useState(true);

  //fecha actual
  const date = new Date()
  const dateString = date.toLocaleString()
  const formattedDate = dateString.replace(/(\d{2})\/(\d{2})\/(\d{4}).*/, "$3-$2-$1");
  const fecha = formattedDate
  const year = date.getFullYear()
  const month = date.getMonth()+1


  //ACCIONES DEL LOGIN 

  const [productos,setProductos] = useState([])
  const [clientes,setClientes] = useState([])

  const [pedidos,setPedidos] = useState([])

  const [ingresos,setIngresos] = useState([])

  const [gastos,setGastos] = useState([])


  //esta function es para cuando me logeol
  function getLoginApplicationInfo(){
    getProductsDB()
  }

  //info productos
  async function getProductsDB (){
    console.log('primera peticion')
    try {
      const response = await fetch('https://rv-back.vercel.app/api/products');
      const data = await response.json();
      await AsyncStorage.setItem('products',JSON.stringify(data.data))
      setProductos(data.data)
      getClientsDB()
    } catch (err) {
      console.log(err);
      setProductos([])
    }
  } 
  //info de los clientes

  async function getClientsDB (){
    console.log('segunda peticion')
    try {
      const response = await fetch('https://rv-back.vercel.app/api/clients');
      const data = await response.json();
      await AsyncStorage.setItem('clients',JSON.stringify(data.data))
      setClientes(data.data)
      getAllPedidos()
      //loginAccess()    
    } catch (err) {
      console.log(err);
      setClientes([])
    }
  } 


  async function getAllPedidos (){
    console.log('tercera peticion')
    try{
      const response = await fetch('https://rv-back.vercel.app/api/pedidos');
      const data = await response.json();
      await AsyncStorage.setItem('pedidos',JSON.stringify(data.data))
      setPedidos(data.data)
      //loginAccess()
      getAllIngresos()    
    }catch(err){
      console.log(err)
      setPedidos([])
    }
  }

  async function getAllIngresos (){
    console.log('cuarta peticion')
    try{
      const response = await fetch('https://rv-back.vercel.app/api/ingresos');
      const data = await response.json();
      await AsyncStorage.setItem('ingresos',JSON.stringify(data.data))
      setIngresos(data.data)
      //loginAccess()    
      getAllGastos()
    }catch(err){
      console.log(err)
      setIngresos([])
    }
  }


  async function getAllGastos (){
    console.log('quinta peticion')
    try{
      const response = await fetch('https://rv-back.vercel.app/api/gastos');
      const data = await response.json();
      await AsyncStorage.setItem('gastos',JSON.stringify(data.data))
      setGastos(data.data)
      loginAccess()    
    }catch(err){
      console.log(err)
      setGastos([])
    }
  }

  async function loginAccess (){
    try{
      await AsyncStorage.setItem("login","true")
      setLogin(false)
    }catch(err){
      console.log(err)
    }
  }


  //ACCION CUANDO ESTOY LOGEADO

  function getAplicationInfo(){
    getProductsStorage()
  }


  async function getProductsStorage(){
    console.log('estoy loageado y voy a hacer peticiones')
    try{
      const res = await AsyncStorage.getItem('products')
      if(res){
        const data = JSON.parse(res)
        setProductos(data)
        getClientsStorage()
      }else{
        const prod = []
        await AsyncStorage.setItem('products',JSON.stringify(prod))
        setProductos(prod)
        getClientsStorage()
      }
    }catch(err){
      console.log(err)
      setProductos([])
    }
  }


  async function getClientsStorage (){
    try{
      const res = await AsyncStorage.getItem('clients')
      if(res){
        const data = JSON.parse(res)
        setClientes(data)
        getPedidosStorage()
      }else{
        const clt = []
        await AsyncStorage.setItem('clients',JSON.stringify(clt))
        setClientes(clt)
        getPedidosStorage()
      }
    }catch(err){
      console.log(err)
      setClientes([])
    }
  }


  async function getPedidosStorage(){
    try{
      const res = await AsyncStorage.getItem('pedidos')
      if(res){
        const data = JSON.parse(res)
        setPedidos(data)
        getIngresosStorage()
      }else{
        const pdd = []
        await AsyncStorage.setItem('pedidos',JSON.stringify(pdd))
        setPedidos(pdd)
        getIngresosStorage()
      }
    }catch(err){
      console.log(err)
      setPedidos([])
    }
  }


  async function getIngresosStorage(){
    try{
      const res = await AsyncStorage.getItem('ingresos')
      if(res){
        const data = JSON.parse(res)
        setIngresos(data)
        getGastosStorage()
      }else{
        const igr = []
        await AsyncStorage.setItem('ingresos',JSON.stringify(igr))
        setIngresos(pdd)
        getGastosStorage()
      }
    }catch(err){
      console.log(err)
      setIngresos([])
    }
  }

  async function getGastosStorage(){
    try{
      const res = await AsyncStorage.getItem('gastos')
      if(res){
        const data = JSON.parse(res)
        setGastos(data)
        AppAcces()
      }else{
        const gst = []
        await AsyncStorage.setItem('gastos',JSON.stringify(gst))
        setGastos(gst)
        AppAcces()
      }
    }catch(err){
      console.log(err)
      setGastos([])
    }
  }

  function AppAcces (){
    setLoading(false)
  }


  //LOG OUT

  async function SetLogOutApp(){
    try{
      await AsyncStorage.setItem("login","false")
      setLogin(true)
    }catch(err){
      console.log(err)
    }
  }


  //pedidos filtrados por fecha actual de creacion
  const pedidosCreadosHoy = pedidos.filter((item)=>item.fechaPedido === fecha)

  //pedidos filtrados por fecha actual de entrega 
  
  const pedidosEntregaHoy = pedidos.filter((item)=>item.fechaPedido === fecha);

  //ingresos filtrados por fecha 
  const ingresosHoy = ingresos.filter((item)=>item.fecha === fecha)

  //ingresos filtrados por mes
  const ingresosTime = ingresos.filter((item)=>item.mes === month)

  //gastos filtrados por fecha
  const gastosHoy = gastos.filter((item)=>item.fecha === fecha)

  //gastos filtrados por mes
  const gastosTime = gastos.filter((item)=>item.mes === month)


  /*---------*/
  //BALANCEEEE
  const [totalIngresos,setTotalIngresos] = useState(0)
  const [totalGastos,setTotalGastos] = useState(0)


  function createBalance (mes){
    const ingresosArray = ingresos.filter((item)=>item.mes === mes);

    const calctotalIngresos = ingresosArray.reduce((acumulador, ingreso) => {
      return acumulador + ingreso.monto;
    }, 0);
    
    setTotalIngresos(calctotalIngresos)
    
    const gastosArray = gastos.filter((item)=>item.mes === mes)

    const calctotalGastos = gastosArray.reduce((acumulador, ingreso) => {
      return acumulador + ingreso.monto;
    }, 0);

    setTotalGastos(calctotalGastos)

  }

  //cosas importantes 
  const initialStateMedios = [
    {
      id:1,
      nombre:"mercado Pago",
      monto:0
    },
    {
      id:2,
      nombre:"efectivo",
      monto:0
    },
    {
      id:3,
      nombre:"transferencia",
      monto:0
    }
  ]

  const [totalMontosPedido,setTotalMontosPedido] = useState([])

  return(
    <AppContext.Provider value={{login,setLogin,loading,setLoading,SetLogOutApp,pedidos,setPedidos,fecha,pedidosCreadosHoy,pedidosEntregaHoy,ingresos,setIngresos,ingresosHoy,ingresosTime,gastos,setGastos,gastosHoy,gastosTime,totalIngresos,setTotalIngresos,totalGastos,setTotalGastos,createBalance,month,getAplicationInfo,getLoginApplicationInfo,productos,clientes,totalMontosPedido,setTotalMontosPedido}}>
      {props.children}
    </AppContext.Provider>
  )
}