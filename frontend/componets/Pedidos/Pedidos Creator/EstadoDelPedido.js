import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import estilos from '../../../styles/styles';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import SelectItem from '../../SelectItem';
import Pagado from './Estados/Pagado';
import Parcial from './Estados/Parcial';
import Pendiente from './Estados/Pendiente';

export default function EstadoDelPedido({total,options,setOptions}) {
 
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
      case "pagado":
        return <Pagado total={total}/>;
      case "pendiente de pago":
        return <></>;
      case "pagado parcialmente":
        return <Parcial total={total} />;
      default:
        return null;
    }
  }

  return (
    <>
      <View style={estilos.headerSection}>
        <View style={estilos.headerTitle}>
          <Feather name="eye" size={24} color="black" />
          <Text style={{fontWeight:"600"}}>Estado del Pedido</Text>
        </View>
      </View>
      <View style={estilos.section}>
        {
          options.map((item)=>
            <SelectItem
              key={item.id}
              id={item.id}
              nombre={item.nombre}
              select={handleChange}
              selected={item.selected}
            />
          )
        }
      </View>
      <>

        {getSelectedComponent()}
      </>
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
});
