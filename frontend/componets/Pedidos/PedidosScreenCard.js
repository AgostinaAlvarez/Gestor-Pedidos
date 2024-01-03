import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import estilos from '../../styles/styles';

export default function PedidosScreenCard({item,remarqued}) {
  return (
    <View style={estilos.card}>
      <Text style={remarqued === "id" ? styles.txtR : null}>Id pedido {item.id}</Text>
      <Text>Entregado</Text>
      <Text style={remarqued === "cliente" ? styles.txtR : null}>Cliente {item.cliente}</Text>
      <Text style={remarqued === "creacion" ? styles.txtR : null}>Fecha de creacion {item.fechaPedido.split("-").reverse().join("-")}</Text>
      <Text style={remarqued === "entrega" ? styles.txtR : null}>Fecha de entrega {item.fechaEntrega.split("-").reverse().join("-")}</Text>
      <Text>Subtotal ${item.subtotal}</Text>
      <Text>Descuento ${item.descuento}</Text>
      <Text>Total ${item.total}</Text>
      <Text>Estado: {item.estado}</Text>
      <Button title='ver mas detalles' 
      ///onPress={()=>{verDetalles(id)}}
      
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'90%',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"black",
    marginBottom:10,
    borderRadius:10
  },

  txtR:{
    fontWeight:"700"
  },

  txt:{

  }
});
