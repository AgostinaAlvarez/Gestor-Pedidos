import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import LoadingScreen from '../LoadingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductosCreator() {
  const [loading,setLoading] = useState(false)
  const [messageScreen,setMessageScreen] = useState(false)
  const [mensaje,setMensaje] = useState("")
  const initialState = {nombre:"",precio:"",id:""}
  const [datos,setDatos] = useState(initialState)

  function HandleChangeNombre (text){
    if(text === ""){
      setDatos({...datos,nombre:""})
    }else{
      setDatos({...datos,nombre:text})
    }
  }

  function HanldeChangePrecio (text){
    if(text === ""){
      setDatos({...datos,precio:""})
    }else{
      setDatos({...datos,precio:text})
    }
  }

  function HandleSubmit (){
    if(datos.nombre === "" || datos.precio === ""){
      alert('debe rellenar todos los campos')
    }else{
      const newobjt = {...datos,id: uuid.v4(),precio: parseFloat(datos.precio.replace(',','.'))}
      console.log(newobjt)
      CreateProduct(newobjt)
    }
  }


  async function CreateProduct (newobjt){
    const response = await AsyncStorage.getItem('productos')
    console.log(response)
  }

  async function CreateProducte (objt){
    setLoading(true)
    try{
      await axios.post('https://rv-back.vercel.app/api/products',{id:objt.id, precio:objt.precio, nombre:objt.nombre})
        .then(response => {
          console.log('hecho')
          setDatos(initialState)
          setMensaje("Producto subido con exito!")
          setMessageScreen(true)
          setLoading(false)
        })
    }catch(err){
      console.log(err)
      alert('error')
      setMensaje("No se pudo agregar el producto")
      setMessageScreen(true)
      setLoading(false)
    }
  }

  useEffect(() => {

  }, [])
  

  return (
    <>
      {

        loading === true ?
        <LoadingScreen/>
        :
        <>
        {
          messageScreen === true ?
          <View style={styles.constainerMessage}>
            <Text>{mensaje}</Text>
            <Button title='aceptar' onPress={()=>{setMessageScreen(false)}}/>
          </View>
          :
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.headerSection}>
                <Text>Nuevo producto</Text>
              </View>
              <View style={styles.section}>
                <Text style={{fontWeight:"700",marginBottom:10,marginTop:7}}>Nombre</Text>
                <TextInput value={datos.nombre} style={styles.inputt} onChangeText={HandleChangeNombre}/>
              </View>
              <View style={styles.section}>
                <Text style={{fontWeight:"700",marginBottom:10,marginTop:7}}>Precio</Text>
                <TextInput value={datos.precio} style={styles.inputPrice} placeholder='$' keyboardType='numeric' onChangeText={HanldeChangePrecio}/>
              </View>
              <View style={{width:"100%",height:25}}></View>
              <Button title='registrar' onPress={()=>{HandleSubmit()}}/>
              <View style={{width:"100%",height:200}}></View>
              <StatusBar style="auto" />
            </View>
          </ScrollView>

        }
        </>
      }
    </>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:"100%",
    backgroundColor: '#fff',
  },

  headerSection:{
    width:"80%",
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"black",
    paddingTop:40,
    paddingBottom:30,
    alignItems:"center"
  },

  section:{
    width:"80%",
    //borderColor:"black",
    //borderWidth:1,
    //borderStyle:"solid",
    //alignItems:"center",
    //height:140,
    paddingTop:10,
    paddingBottom:10,
    gap:0
  },

  inputt:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:7,
    paddingRight:7,
    //minHeight:50,
    width:"100%",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    borderRadius:5,
  },

  inputPrice:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:7,
    paddingRight:7,
    //minHeight:50,
    width:"60%",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    borderRadius:5,
  },

  constainerMessage:{
    flex: 1,
    alignItems: 'center',
    width:"100%",
    backgroundColor: '#fff',
    paddingTop:130
  }
});
