import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../../context/AppContext';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import GastosLista from '../GastosLista';

export default function ByDate({listaActual}) {

  const {gastos} = useContext(AppContext)

  const [value,setValue] = useState(new Date())
  const [listaGastos,setListaGastos] = useState(listaActual)

  function HandleChange(selectedDate) {
    
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth();
      const day = selectedDate.getDate();

      const adjustedDate = new Date(year, month, day); // Construye una nueva fecha utilizando los componentes individuales
      setValue(adjustedDate);
      const formattedDate = adjustedDate.toISOString().split('T')[0];
      const updateList = gastos.filter((item) => item.fecha === formattedDate);
      setListaGastos(updateList);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.dateInputContainer}>
        <Text style={{fontWeight:"600"}}>Fecha</Text>
        <RNDateTimePicker
          mode='date'
          display='calendar'
          locale="es-ES"
          value={value}
          onChange={(event, selectedDate) => HandleChange(selectedDate)}
        />
      </View>
      {
        listaGastos.lenght === 0 ?
        <></>
        :
        <GastosLista
          list={listaGastos}
        />
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
