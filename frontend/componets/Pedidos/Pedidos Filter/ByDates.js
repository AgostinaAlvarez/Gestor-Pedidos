import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import PedidosLista from '../PedidosLista';

export default function ByDates() {
  return (
    <View style={styles.container}>
      <View style={styles.dateInputContainer}>
        <Text style={{fontWeight:"600"}}>Fecha inicial</Text>
        <RNDateTimePicker
          mode='date'
          display='calendar'
          locale="es-ES"
          value={new Date()}
          //onChange={(event, selectedDate) => HandleChangeCreacion(selectedDate)}
        />
      </View>
      <View style={styles.dateInputContainer}>
        <Text style={{fontWeight:"600"}}>Fecha limite</Text>
        <RNDateTimePicker
          mode='date'
          display='calendar'
          locale="es-ES"
          value={new Date()}
          //onChange={(event, selectedDate) => HandleChangeCreacion(selectedDate)}
        />
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
