import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../context/AppContext';
import LoadingScreen from './LoadingScreen';
import Navigation from '../Navigation';
import LoginScreen from './LoginScreen';

export default function PrincipalScreen() {

  const {login,setLogin,loading,setLoading,getAplicationInfo} = useContext(AppContext);

  useEffect(() => {
    getInfoLogin()
  }, [])

  async function getInfoLogin (){
    try{
      const info = await AsyncStorage.getItem("login")
      console.log(JSON.parse(info))
      if(info !== null){
        //existe la condicion
        const loginCond = JSON.parse(info);
        if(loginCond === true){
          //estoy logeado
          console.log('esta logeado')
          setLogin(false)
          getAplicationInfo()
        }else{
          //no estoy logeado
          console.log('no estoy logeado')
          setLoading(false)
          setLogin(true)
        }
      }else{
        //no estoy logeado
        console.log('no estoy logeado,no existe')
        setLoading(false)
        setLogin(true)
      }
    }catch(err){
      console.log("error al obtener los datos")
      //seguir cargando el loading
    }
  }

  return (
    <>
    {
      loading === true ?
      <LoadingScreen/>
      :
      <>
        {
          login === true ?
          <LoginScreen/>
          :
          <Navigation/>
        }
      </>
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
});
