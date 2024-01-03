

import { StyleSheet, Text, View } from 'react-native';
import estilos from '../../../styles/styles';
import { useState } from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Fechas() {
  const [date, setDate] = useState(new Date())

  function HandleChangeCreacion (selectedDate){
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      console.log(formattedDate);
    }
  }

  function HandleChangeEntrega (selectedDate){
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      console.log(formattedDate);
    }
  }

  return (
    <>
      <View style={estilos.headerSection}>
        <View style={estilos.headerTitle}>
          <Text>Fechas</Text>
        </View>
      </View>
      
      <View style={styles.dateInputContainer}>
        <Text style={{fontWeight:"600"}}>Fecha de creacion</Text>
        <DateTimePicker
          mode='date'
          display='calendar'
          locale="es-ES"
          value={date}
          onChange={(event, selectedDate) => HandleChangeCreacion(selectedDate)}
        />
      </View>
      <View style={styles.dateInputContainer}>
        <Text style={{fontWeight:"600"}}>Fecha de entrega</Text>
        <DateTimePicker
          mode='date'
          display='calendar'
          locale="es-ES"
          value={date}
          onChange={(event, selectedDate) => HandleChangeEntrega(selectedDate)}
        />
      </View>
      
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
  
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width:"90%", // 80% del ancho de la pantalla
    height: "40%", // 60% del alto de la pantalla
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtalign:{
    
    backgroundColor:"red"
  },
  dateInputContainer:{
    width:"80%",
    //borderWidth:1,
    //borderStyle:"solid",
    //borderColor:"black",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:30
  }
});
