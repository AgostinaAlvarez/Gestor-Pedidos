import { StyleSheet, Text, View } from 'react-native';
import estilos from '../../styles/styles';
import { Button } from 'react-native';

export default function IngresosCard({item}) {
  return (
    <View style={estilos.card}>
      <Text style={styles.txtR}>{item.fecha.split("-").reverse().join("-")}</Text>
      {
        item.idVenta === null ?
        <></>
        :
        <Text>Venta Id {item.idVenta}</Text>
      }
      {
        item.descripcion === null ?
        <></>
        :
        <Text>{item.descripcion}</Text>
      }
      <Text>Monto: {item.monto}</Text>
      <Text>Medio {item.medio}</Text>
      <Button title='ver mas detalle'/>
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
  txtR:{
    fontWeight:"700"
  },
});
