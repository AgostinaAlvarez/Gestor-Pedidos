import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import im1 from "../../../assets/banco.jpg"
import im2 from "../../../assets/efectivo.jpg"
import im3 from "../../../assets/mp.png"
import { Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AppContext } from '../../../context/AppContext';

export default function MediosDePago({setTotal}) {
  
  const {totalMontosPedido,setTotalMontosPedido} = useContext(AppContext)

  useEffect(() => {
    setTotalMontosPedido([])
  }, [])
  

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

  const [mediosDePago,setMediosDePago] = useState(initialStateMedios)

  function HandleChange (text,id){
    if(text === ""){
      console.log("es cero")
      const updateMedios = mediosDePago.map((item)=>{
        if(item.id === id){
          return {
            ...item, monto : 0
          }
        }
        return item
      })
      setTotal(updateMedios[0].monto+updateMedios[1].monto+updateMedios[2].monto)
      setMediosDePago(updateMedios)
      setTotalMontosPedido(updateMedios)
    }else{
      const value = parseFloat(text.replace(',','.'))
      console.log(value)
      const updateMedios = mediosDePago.map((item)=>{
        if(item.id === id){
          return {
            ...item, monto : value
          }
        }
        return item
      })
      setTotal(updateMedios[0].monto+updateMedios[1].monto+updateMedios[2].monto)
      setMediosDePago(updateMedios)
      setTotalMontosPedido(updateMedios)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"700",marginBottom:23,marginTop:7}}>Definir monto</Text>
      <Text>Mercado pago</Text>
      <View style={styles.item}>
        <Image source={im3} style={styles.imgg}/>
        <TextInput onChangeText={(text)=>{HandleChange(text,1)}} style={styles.inputt} placeholder='$' keyboardType='numeric'/>
      </View>
      <Text>Efectivo</Text>
      <View style={styles.item}>
        <Image source={im2} style={styles.imgg}/>
        <TextInput onChangeText={(text)=>{HandleChange(text,2)}} style={styles.inputt} placeholder='$' keyboardType='numeric'/>
      </View>
      <Text>Transferencia</Text>
      <View style={styles.item}>
        <Image source={im1} style={styles.imgg}/>
        <TextInput onChangeText={(text)=>{HandleChange(text,3)}} style={styles.inputt} placeholder='$' keyboardType='numeric'/>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"80%",
    //borderColor:"black",
    //borderWidth:1,
    //borderStyle:"solid",
    //alignItems:"center",
    //height:140,
    //paddingTop:20,
    //paddingBottom:20,
    gap:7
  },

  item:{
    flexDirection:"row",
    //backgroundColor:"red",
    gap:15,
    alignItems:"center",
    marginBottom:10
  },
  imgg:{
    height:40,
    width:40
  },
  inputt:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:7,
    width:"100%",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"#00000059",
    borderRadius:5,
  }
});
