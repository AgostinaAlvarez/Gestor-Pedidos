import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../../context/AppContext';
import { Button } from 'react-native';
import GastosLista from '../GastosLista';

export default function ByDates() {

  const {gastos} = useContext(AppContext)

  const [lista,setLista] = useState([])

  const [value1,setValue1] = useState(new Date())
  const [value2,setValue2] = useState(new Date())


  function HandleChangeValue1 (selectedDate){
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth();
      const day = selectedDate.getDate();

      const adjustedDate = new Date(year, month, day); // Construye una nueva fecha utilizando los componentes individuales
      console.log(adjustedDate)
      setValue1(adjustedDate);
    }
  }

  function HandleChangeValue2 (selectedDate){
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth();
      const day = selectedDate.getDate();

      const adjustedDate = new Date(year, month, day); // Construye una nueva fecha utilizando los componentes individuales
      setValue2(adjustedDate);
    }
  }

  function HanldeSubmit (){
    //console.log('primer')
    //console.log(value1)
    //console.log('segundo')
    //console.log(value2)
    const fecha1 = value1.toISOString().split('T')[0]; 
    const fecha2 = value2.toISOString().split('T')[0];

    if(fecha1 === fecha2){
      alert('debes seleccionar dos fechas diferentes')
    }else{
      const fechaObjeto1 = new Date(fecha1);
      const fechaObjeto2 = new Date(fecha2);
      if (fechaObjeto1 > fechaObjeto2) {
        alert(`la fecha inicial debe ser menor que la fecha final`);
      } else if (fechaObjeto1 < fechaObjeto2) {
        console.log('esta bien');
        filterData(fechaObjeto1,fechaObjeto2)
      }
    }
  }


  function filterData (fechaInicio,fechaFin){
    const objetosFiltrados = gastos.filter(objeto => {
      const fechaObjeto = new Date(objeto.fecha);
      return fechaObjeto >= new Date(fechaInicio) && fechaObjeto <= new Date(fechaFin);
    });
    setLista(objetosFiltrados)
  }

  useEffect(() => {
    setLista([])
  }, [])
  


  return (
    <View style={styles.container}>
      <View style={styles.dateInputContainer}>
        <Text style={{fontWeight:"600"}}>Fecha inicial</Text>
        <RNDateTimePicker
          mode='date'
          display='calendar'
          locale="es-ES"
          value={value1}
          onChange={(event, selectedDate) => HandleChangeValue1(selectedDate)}
        />
      </View>
      <View style={styles.dateInputContainer}>
        <Text style={{fontWeight:"600"}}>Fecha final</Text>
        <RNDateTimePicker
          mode='date'
          display='calendar'
          locale="es-ES"
          value={value2}
          onChange={(event, selectedDate) => HandleChangeValue2(selectedDate)}
        />
      </View>
      <Button title='buscar' onPress={()=>{HanldeSubmit()}}/>
      {
        lista.length === 0 ?
        <></>
        :
        <GastosLista
          list={lista}
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
      width:"100%",
      gap:15,
      paddingTop:10,
      paddingBottom:10
  },
  dateInputContainer:{
    //width:"80%",
    //borderWidth:1,
    //borderStyle:"solid",
    //borderColor:"black",
    flexDirection:"row",
    alignItems:"center",
    //justifyContent:"center",
    
  },
});
