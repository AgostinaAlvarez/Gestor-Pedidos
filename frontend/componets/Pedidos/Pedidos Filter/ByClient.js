import { StyleSheet, Text, View } from 'react-native';
import estilos from '../../../styles/styles';
import { TextInput } from 'react-native-gesture-handler';
import PedidosLista from '../PedidosLista';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

export default function ByClient() {

  const {pedidos} = useContext(AppContext)

  const [value,setValue] = useState("")
  const [listaPedidos,setListaPedidos] = useState([])

  function HandleChange (text){
    console.log(text)
    setValue(text)
    if(text === ""){
      setListaPedidos([])
    }else{
      const filtrado = pedidos.filter((item)=>item.cliente.toLowerCase().replace(/\s/g, "").includes(text.replace(/\s/g, "")))
      console.log(filtrado)
      setListaPedidos(filtrado)
    }
  }

  useEffect(() => {
    setValue("")
    setListaPedidos([])
  }, [])
  

  return (
    <View style={styles.container}>
      <View style={estilos.section2}>
        <Text>Buscar por nombre de cliente</Text>
        <TextInput value={value} style={styles.inputt} onChangeText={HandleChange}/>
      </View>
      {
        listaPedidos.length === 0 ?
        <></>
        :
        <>
          <PedidosLista
            list={listaPedidos}
            remarqued={"cliente"}
          />
          <View style={{height:300}}>

          </View>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    width:"100%"
  },
  inputt:{
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
