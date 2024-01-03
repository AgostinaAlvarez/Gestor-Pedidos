import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import estilos from '../../../../styles/styles';
import Medios from '../../../Medios';
import { useState } from 'react';
import MediosDePago from '../MediosDePago';

export default function Parcial({total}) {
  const [ingresado,setIngresado] = useState(0)
  return (
    <View style={estilos.section2}>
      <MediosDePago
        setTotal={setIngresado}
      />
      {
        total-ingresado > 0 ?
        <Text>Monto pendiente de pago ${total-ingresado}</Text>
        :
        <>
        {
          total-ingresado < 0 ?
          <Text>Error! Se excede por ${total-ingresado}</Text>
          :
          <Text>Error! Ha completa el total de la venta, si es correcto la opcion que debe seleccionar es "pagado"</Text>
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
  },
});
