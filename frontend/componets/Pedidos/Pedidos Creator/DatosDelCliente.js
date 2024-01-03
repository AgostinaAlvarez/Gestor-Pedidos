import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import estilos from '../../../styles/styles';
import { useContext, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Search from '../../Search';
import { AppContext } from '../../../context/AppContext';

export default function DatosDelCliente({datosDelCliente,setDatosDelCliente}) {
  
  const {clientes} = useContext(AppContext)

  const [searchList,setSearchList] = useState([])
  const [clientSearch,setClientSearch] = useState("")

  function HandleChange (text){
    console.log(text)
    setDatosDelCliente({...datosDelCliente,nombre:text})
    const filterClients = clientes.filter((item)=>item.nombre.toLowerCase().replace(/\s/g, "").includes(text))
    setSearchList(filterClients)
    setClientSearch(text)
  }


  function SelectClient (item){
    console.log(item)
    //setData(item)
    setDatosDelCliente(item)
    setSearchList([])
  }

  return (
    <>
      <View style={estilos.headerSection}>
        <View style={estilos.headerTitle}>
          <Text>Datos del cliente</Text>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Text>Nombre</Text>
        <Search
          inputText={clientSearch}
          searchList={searchList}
          data={datosDelCliente.nombre}
          HandleChange={HandleChange}
          selectItem={SelectClient}
        />
      </View>
      <View style={estilos.section2}> 
        <Text>Direccion</Text>
        <TextInput style={estilos.inputt} value={datosDelCliente.direccion} onChangeText={(text)=>{setDatosDelCliente({...datosDelCliente,direccion:text})}}/>
      </View>
      <View style={estilos.section2}> 
        <Text>Telefono</Text>
        <TextInput style={estilos.inputt} keyboardType='phone-pad' value={datosDelCliente.telefono} onChangeText={(text)=>{setDatosDelCliente({...datosDelCliente,telefono:text})}}/>
      </View>
      <View style={estilos.section2}> 
        <Text>Redes sociales</Text>
        <TextInput style={estilos.inputt} value={datosDelCliente.redes} onChangeText={(text)=>{setDatosDelCliente({...datosDelCliente,redes:text})}}/>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  //
  searchBox:{
    position:"relative",
    zIndex: 900,
    width:"80%",
    paddingTop:20,
    paddingBottom:20,
    gap:10,
  },
  //
  searchItem: {
    position: "absolute",
    zIndex: 2,
    top: "100%",
    borderWidth: 1,
    borderColor: "#00000059",
    borderStyle: "solid",
    width: "100%",
    height: 200,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  nameSearch:{
    width:"100%",
    height:34,
  },
  inputSearchBox:{
    width:"100%",
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"#00000059",
    borderRadius:10,
  },
});
