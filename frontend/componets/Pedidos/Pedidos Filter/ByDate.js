import RNDateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View } from 'react-native';
import PedidosLista from '../PedidosLista';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

export default function ByDate({listaAcutual,type}) {

  const {pedidos} = useContext(AppContext)
  
  const [listaEntrega,setListaEntrega] = useState(listaAcutual)
  const [listaCreados,setListaCreados] = useState(listaAcutual)

  const [valueE,setValueE] = useState(new Date())
  const [valueC,setValueC] = useState(new Date())




  function HandleChangeCreacion(selectedDate) {
    if (selectedDate) {

      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth();
      const day = selectedDate.getDate();

      const adjustedDate = new Date(year, month, day);
      setValueC(adjustedDate)
      const formattedDate = adjustedDate.toISOString().split('T')[0];
      const updateList = pedidos.filter((item)=>item.fechaPedido === formattedDate)
      setListaCreados(updateList)
    }
  }

  function HandleChangeEntrega(selectedDate) {
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth();
      const day = selectedDate.getDate();

      const adjustedDate = new Date(year, month, day);
      setValueE(adjustedDate)
      const formattedDate = adjustedDate.toISOString().split('T')[0];
      const updateList = pedidos.filter((item)=>item.fechaEntrega === formattedDate)
      setListaEntrega(updateList)
    }
  }



  useEffect(() => {
    console.log('rendr')
  }, [])
  

  return (
    <View style={styles.container}>
      {
        type === "entrega" ?
        <>
          <View style={styles.dateInputContainer}>
            <Text style={{fontWeight:"600"}}>Fecha</Text>
            <RNDateTimePicker
              mode='date'
              display='calendar'
              locale="es-ES"
              value={valueE}
              onChange={(event, selectedDate) => HandleChangeEntrega(selectedDate)}
            />
          </View>
          {
            listaEntrega.lenght === 0 ?
            <Text>No hay resultado</Text>
            :
            <PedidosLista 
                list={listaEntrega}
                remarqued={"entrega"}
            />
          }
        </>
        :
        <>
          <View style={styles.dateInputContainer}>
            <Text style={{fontWeight:"600"}}>Fecha</Text>
            <RNDateTimePicker
              mode='date'
              display='calendar'
              locale="es-ES"
              value={valueC}
              onChange={(event, selectedDate) => HandleChangeCreacion(selectedDate)}
            />
          </View>
          {
            listaCreados.lenght === 0 ?
            <Text>No hay resultado</Text>
            :
            <PedidosLista 
                list={listaCreados}
                remarqued={"creacion"}
            />
          }
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
    justifyContent: 'center',
    width:"100%"
  },
  dateInputContainer:{
    //width:"80%",
    //borderWidth:1,
    //borderStyle:"solid",
    //borderColor:"black",
    flexDirection:"row",
    alignItems:"center",
    //justifyContent:"center",
    marginTop:20,
    marginBottom:20
  },
});
