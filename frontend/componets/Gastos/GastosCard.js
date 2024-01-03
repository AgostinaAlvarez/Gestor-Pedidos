import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import estilos from '../../styles/styles';

export default function GastosCard({item}) {
  return (
    <View style={estilos.card}>
      <Text style={styles.txtR}>{item.fecha.split("-").reverse().join("-")}</Text>
      <Text>Descripcion: {item.descripcion}</Text>
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
