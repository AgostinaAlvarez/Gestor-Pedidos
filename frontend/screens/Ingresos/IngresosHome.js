import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function IngresosHome() {
  return (
    <View style={styles.container}>
      <View style={styles.boxFront}>
        <Text>Caja superpuesta</Text>
        <ScrollView>
          <Text>Hola</Text>
        </ScrollView>
      </View>
      <View style={styles.boxBack}>
        <Text>Caja del fondo</Text>
      </View>
      <StatusBar style="auto" />
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
  boxBack:{
    height:200,
    width:200,
    backgroundColor:"violet",
    position:"relative"
  },
  boxFront:{
    height:100,
    width:100,
    position:"absolute",
    backgroundColor:"red",
    top:230,
    zIndex:20
  }
});
