import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import estilos from '../../../styles/styles';


export default function Descuento({subtotal,total,setTotal,setDesc}) {
 
  const [descuento,setDescuento] = useState(
    {
      moneda:0,
      porcentaje:0
    }
  )
  
  function HandleChangeMon (text){
    console.log(text)
    if(text === ""){
      setDescuento({
        moneda:0,
        porcentaje:0
      })
      setDesc(0)
      setTotal(subtotal)
    }else{
      const value = parseFloat(text.replace(',','.'))
      const cuent = ((100*value)/subtotal).toFixed(2)
      setDescuento({
        moneda:value,
        porcentaje:cuent
      })
      setDesc(value)
      setTotal(subtotal-value)
    }
  }
  
  
  function HandleChangePer (text){
    if(text === ""){
      setDescuento({
        moneda:0,
        porcentaje:0
      })
      setDesc(0)
      setTotal(subtotal)
    }else{
      const value = parseFloat(text.replace(',','.'))
      const cuent = (subtotal*value)/100
      setDescuento({
        moneda:cuent,
        porcentaje:value
      })
      setTotal(subtotal-cuent)
      setDesc(cuent)
    }
  }

  return (
    <>
      <View style={estilos.headerSection}>
        <View style={estilos.headerTitle}>
          <Ionicons name="pricetag-outline" size={21} color="black" />
          <Text style={{fontWeight:"600"}}>Subtotal del pedido ${subtotal}</Text>
        </View>
      </View>
      <View style={estilos.section2}>
        <Text style={{fontWeight:"700"}}>Descuento</Text>
        <View style={styles.descuentoInputContainer}>
          <Feather  name="percent" size={22} color="black" />
          <TextInput keyboardType='numeric' style={styles.inputt} value={descuento.porcentaje === 0 ? null : descuento.porcentaje.toString()} onChangeText={HandleChangePer} placeholder='0'/>
        </View>
        <View style={styles.descuentoInputContainer}>
          <MaterialIcons  name="attach-money" size={22} color="black" />
          <TextInput keyboardType='numeric' style={styles.inputt} value={descuento.moneda === 0 ? null : descuento.moneda.toString()} onChangeText={HandleChangeMon} placeholder='0'/>
        </View>
      </View>
      <View style={estilos.section2}>
          <Text style={{marginBottom:7}}>subtotal - descuento = ${subtotal}-${descuento.moneda}</Text>
          <Text style={{fontWeight:"700",fontSize:18}}>Total ${total}</Text>
      </View>
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
  descuentoInputContainer:{
    //backgroundColor:"red",
    flexDirection:"row",
    gap:10,
    alignItems:"center"
  },
  inputt:{
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:10,
    width:"35%",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    borderRadius:5
  },

});
