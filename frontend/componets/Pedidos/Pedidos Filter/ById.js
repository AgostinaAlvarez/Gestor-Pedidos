import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import estilos from '../../../styles/styles';
import PedidosLista from '../PedidosLista';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

export default function ById() {
  const {pedidos} = useContext(AppContext)
  
  const [value,setValue] = useState("")
  
  const [listaPedidos,setListaPedidos] = useState([])


  function HandleChange (text){
    setValue(text)
    if(text === ""){
      setListaPedidos([])
    }else{
      const filtrado = pedidos.filter((item)=>item.id.toLowerCase().replace(/\s/g, "").includes(text.replace(/\s/g, "")))
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
        <Text>Id de pedido</Text>
        <TextInput style={styles.inputt} value={value} onChangeText={HandleChange}/>
      </View>
      {
        listaPedidos.length === 0 ?
        <></>
        :
        <>
          <PedidosLista
            list={listaPedidos}
            remarqued={"id"}
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
