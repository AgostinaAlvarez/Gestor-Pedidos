import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import estilos from '../../../styles/styles';
import SelectItem from '../../SelectItem';

export default function SelectProducts({products,setProducts,subtotal,setSubotal,setTotal}) {
  //el array lo vamos a obtener del contexto


  function selectProducto (id){
    const updateArray = products.map((item)=>{
      if(item.id === id){
        return {...item, select: !item.select, cantidad: item.select === false ? 1 : 0}
      }
      return item
    })
    setProducts(updateArray)
    getTotal(updateArray)
  }

  function addCantidad (id){
    const updateArray = products.map((item)=>{
      if(item.id === id){
        item.cantidad = item.cantidad+1
        return item
      }
      return item
    })
    setProducts(updateArray)
    getTotal(updateArray)
  }

  function substCantidad (id){
    const updateArray = products.map((item)=>{
      if(item.id === id){
        if(item.cantidad === 1){
          item.cantidad = 1
        }else{
          item.cantidad = item.cantidad-1
        }
      }
      return item
    })
    setProducts(updateArray)
    getTotal(updateArray)
  }
  
  function getTotal (arrayPrd){
    let df = 0;
    arrayPrd.forEach(element => {
      if(element.select === true){
        const valor = element.cantidad * element.precio
        df = df+valor
      }
    });
    setSubotal(df)
    setTotal(df)
  }


  return (
    <>
      <View style={estilos.section}>
        {
          products.map((item)=>
          <SelectItem
              key={item.id}
              id={item.id}
              nombre={item.nombre}
              select={selectProducto}
              selected={item.select}
          />
          )
          
        }
      </View>
      {
        products.map((item)=>
        <>
        {
          item.select === true ?
            <View style={estilos.section} key={item.id}>
              <View style={estilos.card}>
                <Text style={{fontWeight:"700"}}>{item.nombre}</Text>
                <Text>${item.precio}</Text>

                <View style={styles.cardCantidadContainer}>
                  <Text>Cantidad</Text>
                  <View style={styles.cantidadContainer}>
                    <TouchableOpacity onPress={()=>{addCantidad(item.id)}}>
                      <Feather name="plus-circle" size={23} color="green" />
                    </TouchableOpacity>
                    <Text style={{fontWeight:"600"}}>{item.cantidad}</Text>
                    <TouchableOpacity onPress={()=>{substCantidad(item.id)}}>
                      <Feather name="minus-circle" size={23} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text>Subtotal ${(item.precio)*(item.cantidad)}</Text>
              </View>
            </View>
            :
            <></>
        }
        </>)
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardCantidadContainer:{
    width:"100%",
    //borderColor:"black",
    //borderWidth:1,
    //borderStyle:"solid",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    //gap:30
  },
  cantidadContainer:{
    flexDirection:"row",
    //justifyContent:"center",
    alignItems:"center",
    gap:10
  }
});
