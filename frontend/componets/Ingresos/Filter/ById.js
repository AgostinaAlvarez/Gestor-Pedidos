import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../../context/AppContext';

export default function ById() {
  const {ingresos} = useContext(AppContext)
  const [value,setValue] = useState("")
  const [listaIngresos,setListaIngresos] = useState([])

  function HandleChange(text){
    if(text === ""){
      setListaIngresos([])
    }else{
      const filtrado = ingresos.filter((item)=>item.idVenta.toLowerCase().replace(/\s/g, "").includes(text.replace(/\s/g, "")))
      setListaIngresos(filtrado)
    }
  }

  useEffect(() => {
    setValue("")
    setListaIngresos([])
  }, [])
  

  return (
    <View style={styles.container}>
      <View style={estilos.section2}>
        <Text>Buscar ingreso por id de venta</Text>
        <TextInput style={styles.inputt} value={value} onChangeText={HandleChange}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%"
  },
});
