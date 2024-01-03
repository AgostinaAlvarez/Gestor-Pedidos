import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import estilos from '../../styles/styles';

export default function ProductosHome() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{width:"90%",marginTop:40,marginBottom:20,gap:15}}>
          <View style={estilos.card}>
            <Text>Nombre</Text>
            <Text>Precio unitario</Text>
          </View>
          <View style={estilos.card}>
            <Text>Nombre</Text>
            <Text>Precio unitario</Text>
          </View>
          <View style={estilos.card}>
            <Text>Nombre</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
