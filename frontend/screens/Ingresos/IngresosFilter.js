import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import estilos from '../../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import ScrollHorizontal from '../../componets/ScrollHorizontal';
import { useContext, useEffect, useState } from 'react';
import ByMonthAndYear from '../../componets/Ingresos/Filter/ByMonthAndYear';
import ByDate from '../../componets/Ingresos/Filter/ByDate';
import ByDates from '../../componets/Ingresos/Filter/ByDates';
import ById from '../../componets/Ingresos/Filter/ById';
import { AppContext } from '../../context/AppContext';

export default function IngresosFilter() {
  const arrayyy = [1,2,3,4,5,6,7,8,9,12,13,1,2,1,2,3,2,1,32,4]

  const {ingresosHoy,fecha,ingresosTime} = useContext(AppContext)

  const [options,setOptions] = useState([
    {
      nombre:"mes y año",
      id:1,
      selected:true
    },
    {
      nombre:"fecha",
      id:2,
      selected:false
    },
    {
      nombre:"entre dos fechas",
      id:3,
      selected:false
    },
  ]);

  function HandleChange (id){
    const updatedArray = options.map((item) => {
      if (item.id === id) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setOptions(updatedArray);
  }

  function getSelectedComponent() {
    const selectedOption = options.find((item) => item.selected);

    switch (selectedOption?.nombre) {
      case "mes y año":
        return <ByMonthAndYear listaAcutual={ingresosTime}/>;
      case "fecha":
        return <ByDate listaAcutual={ingresosHoy}/>;
      case "entre dos fechas":
        return <ByDates/>;
      default:
        return null;
    }
  }

  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={estilos.containerGrn}>
        <View style={{width:"100%", gap:10,paddingLeft:20,paddingRight:20, flexDirection:"row",alignItems:"center",height:70,backgroundColor:"#EDEDED"}}>
          <Ionicons name="options" size={25} color="black" />
          <Text style={{fontWeight:"700"}}>Filtros de busqueda</Text>
        </View>
        <ScrollHorizontal
          list={options}
          handleChange={HandleChange}
        />
        <>
          {getSelectedComponent()}
        </>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:"100%",
    backgroundColor: '#fff',
  },
  section:{
    width:"60%",
    borderColor:"black",
    borderWidth:1,
    borderStyle:"solid",
    alignItems:"center",
    justifyContent:"center",
    //height:140,
    height:"15%",
    gap:10,
    zIndex:50
  },
});
