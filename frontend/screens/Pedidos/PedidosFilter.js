import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import ByMonth from '../../componets/Pedidos/Pedidos Filter/ByMonth';
import estilos from '../../styles/styles';
import ScrollHorizontal from '../../componets/ScrollHorizontal';
import ByClient from '../../componets/Pedidos/Pedidos Filter/ByClient';
import ById from '../../componets/Pedidos/Pedidos Filter/ById';
import ByDates from '../../componets/Pedidos/Pedidos Filter/ByDates';
import ByDate from '../../componets/Pedidos/Pedidos Filter/ByDate';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';

export default function PedidosFilter() {

  const {pedidosCreadosHoy,pedidosEntregaHoy} = useContext(AppContext)

  const [options, setOptions] = useState([
    {
      id: 3,
      nombre: "fecha de creacion",
      selected: true,
    },
    {
      id: 4,
      nombre: "fecha de entrega",
      selected: false,
    },
    {
      id: 2,
      nombre: "cliente",
      selected: false,
    },
    {
      id: 5,
      nombre: "id de pedido",
      selected: false,
    },
   
  ]);

  function handleChange(id) {
    const updatedArray = options.map((item) => {
      if (item.id === id) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setOptions(updatedArray);
  }

  // Obtener el componente correspondiente a la opción seleccionada
  function getSelectedComponent() {
    const selectedOption = options.find((item) => item.selected);

    switch (selectedOption?.nombre) {
      case "cliente":
        return <ByClient list={[]}/>;
      case "fecha de creacion":
        return <ByDate type={"creacion"} listaAcutual={pedidosCreadosHoy}/>;
      case "fecha de entrega":
        return <ByDate type={"entrega"} listaAcutual={pedidosEntregaHoy}/>;
      case "id de pedido":
        return <ById />;
      default:
        return null;
    }
  }

  //const arrayy = [1,2,3,4,5,6,7,7]
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#fff"}}>
      <View style={estilos.containerGrn}>
        <View style={{width:"100%", gap:10,paddingLeft:20,paddingRight:20, flexDirection:"row",alignItems:"center",height:70,backgroundColor:"#EDEDED"}}>
          <Ionicons name="options" size={25} color="black" />
          <Text style={{fontWeight:"700"}}>Filtros de busqueda</Text>
        </View>
        <ScrollHorizontal
          list={options}
          handleChange={handleChange}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent:"center"
  },

});
