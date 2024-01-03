import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from '../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {

  const {SetLoginApp,getLoginApplicationInfo} = useContext(AppContext)

  const [usuario,setUsuario] = useState("")
  const [password,setPassword] = useState("")

  function HandleSubmit(){
    if(usuario === "rvlovepasta" && password === "1234"){
      console.log('acceso permitido')
      getLoginApplicationInfo()
    }
  }

  
  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text)=>{setUsuario(text)}} style={styles.inputs} placeholder='usuario'/>
      <TextInput onChangeText={(text)=>{setPassword(text)}} style={styles.inputs} placeholder='contraseña' secureTextEntry={true}/>
      <TouchableOpacity style={styles.btn} onPress={()=>{HandleSubmit()}}>
        <Text style={{color:"#fff"}}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    width:270,
    paddingTop:17,
    paddingBottom:17,
    paddingLeft:10,
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    borderRadius:5,
    marginBottom:7
  },
  btn:{
    width:270,
    paddingTop:15,
    paddingBottom:15,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#00B1EA",
    marginTop:7,
    borderRadius:15
  }
});
