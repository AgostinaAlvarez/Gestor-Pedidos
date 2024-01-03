import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function PedidosScreenDetalle({setDetalles}) {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Button title="volver atras" onPress={()=>{setDetalles(false)}}/>
        <Text>Pedidos Screen detalle</Text>
        <StatusBar style="auto" />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center"
  },
});
