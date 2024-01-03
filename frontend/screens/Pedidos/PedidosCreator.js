import { useContext, useEffect, useState } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import estilos from '../../styles/styles'
import { Feather } from '@expo/vector-icons';
import SelectProducts from '../../componets/Pedidos/Pedidos Creator/SelectProducts';
import Descuento from '../../componets/Pedidos/Pedidos Creator/Descuento';
import EstadoDelPedido from '../../componets/Pedidos/Pedidos Creator/EstadoDelPedido';
import DatosDelCliente from '../../componets/Pedidos/Pedidos Creator/DatosDelCliente';
import Fechas from '../../componets/Pedidos/Pedidos Creator/Fechas';
import { AppContext } from '../../context/AppContext';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PedidosCreator() {
  
  const {productos,totalMontosPedido,setTotalMontosPedido} = useContext(AppContext)

  const navigation = useNavigation();

  useEffect(() => {
    console.log('reinicio')
    setTotalMontosPedido([])
    console.log(productsConfig)
  }, [])
  

  const productsConfig = productos.map((item)=>{ return {...item,select:false,cantidad:0} })

  //tengo que obtener: el total, el descuento, fecha de pedido, fecha de entrega, cliente id
  const [products,setProducts] = useState(productsConfig);
  const [subtotal,setSubtotal] = useState(0);
  const [total,setTotal] = useState(0);
  const [descuento,setDescuento] = useState(0);
  const [datosDelCliente,setDatosDelCliente] = useState({nombre:"",direccion:"",telefono:"",redes:"",id:""})
  const [options,setOptions] = useState([{id:1,nombre: "pagado",selected: false},{id: 2,nombre: "pendiente de pago",selected: false},{id: 3,nombre: "pagado parcialmente",selected: false}])
  //const [mediosDePago,setMediosDePago] = useState([{medio:"efectivo",monto:0,select:false},{medio:"mercadopago",monto:0,select:false},{medio:"transferencia bancaria",monto:0,select:false}])
  
  const [fechaCreacion,setFechaCreacion] = useState("")
  const [fechaEntrega,setFechaEntrega] = useState("")

  //cuando este listo hacemos un filtro de los productos seleccionados, luego evaluamos el subtotal, el descuento, el total, los datos del cliente

  function HandleSubmit (){
    console.log('estos son los datos')
    console.log('productos seleccionados')
    const productsCta = products.filter((item)=>item.select === true)
    console.log(productsCta)
    console.log('subtotal')
    console.log(subtotal)
    console.log('descuento')
    console.log(descuento)
    console.log('total')    
    console.log(total)
    console.log('estado del pedido')
    const estadoPedido = options.filter((item)=>item.selected === true)
    console.log(estadoPedido[0].nombre)
    console.log('datos del cliente')
    console.log(datosDelCliente)
    console.log('medios')
    console.log(totalMontosPedido)
    navigation.navigate('homeScreen')
  }



  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
      <View style={estilos.containerGrn}>
        {/*header*/}
        <View style={estilos.headerSection}>
          <View style={estilos.headerTitle}>
            <Feather name="shopping-bag" size={20} color="black" />
            <Text style={{fontWeight:"700"}}>Seleccionar productos</Text>
          </View>
        </View>
        {/*esta es la parte de la seleccion*/}
        <SelectProducts
          products={products}
          setProducts={setProducts}
          setSubotal={setSubtotal}
          subtotal={subtotal}
          setTotal={setTotal}
        />
        {/*analizamos si existen productos seleccionados*/}
        {
          products.find((item)=>item.select === true) ?
          <>
            <Descuento
              subtotal={subtotal}
              total={total}
              setTotal={setTotal}
              setDesc={setDescuento}
            />
            <EstadoDelPedido
              options={options}
              setOptions={setOptions}
              total={total}
            />
            <DatosDelCliente
              datosDelCliente={datosDelCliente}
              setDatosDelCliente={setDatosDelCliente}
            />
            <Fechas/>
            <Button title='aceptar' onPress={(()=>{HandleSubmit()})}/>
          </>
          :
          <></>
        }
      </View>
      <View style={{width:"100%",height:500}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:20,
  },
});
