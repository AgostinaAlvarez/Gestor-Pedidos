import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Reloj from '../../componets/Reloj';
import Constants from 'expo-constants'
import { AppContext } from '../../context/AppContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {

  const {pedidos} = useContext(AppContext);


  useEffect(() => {
    const filtro = pedidos.find((item)=>item.id === "AAA")
    console.log(filtro) 
  }, [])
  
  
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Reloj/>
        <View>
          <Text>Entregas programadas</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={{display:"flex",flexDirection:"row",paddingLeft:15,gap:10,alignItems:"center",backgroundColor:"#3be7b4",position:"absolute",width:"100%",height:60,borderTopLeftRadius:15,borderTopRightRadius:15}}>
            <AntDesign name="checkcircleo" size={24} color="#fff" />
            <Text style={{color:"#fff",fontWeight:700}}>Entregado</Text>
          </View>
          <View style={{marginTop:60,width:"100%",padding: 20,gap:10}}>
            <Text>Cliente: Ana López</Text>
            <Text>Direccion: Av. Libertad 1234</Text>
            <Text>Pagado</Text>
            <Button title='ver detalle'/>
          </View>
          {/* Contenido del View interno */}
        </View>

        <View style={styles.innerContainer}>
          <View style={{display:"flex",gap:8, flexDirection:"row",paddingLeft:15,alignItems:"center",backgroundColor:"#ffb429",position:"absolute",width:"100%",height:60,borderTopLeftRadius:15,borderTopRightRadius:15}}>
            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
            <Text style={{color:"#fff",fontWeight:700}}>Pendiente de entrega</Text>
          </View>
          <View style={{marginTop:60,width:"100%",padding: 20,gap:10}}>
            <Text>Cliente: Pablo Vargas</Text>
            <Text>Direccion: Calle de los Pájaros 456</Text>
            <Text>Pendiente de pago</Text>
            <Text>Monto pendiente: $7500</Text>
            <Button title='ver detalle'/>
          </View>
          {/* Contenido del View interno */}
        </View>

        <View style={styles.innerContainer}>
          <View style={{display:"flex",gap:8, flexDirection:"row",paddingLeft:15,alignItems:"center",backgroundColor:"#ffb429",position:"absolute",width:"100%",height:60,borderTopLeftRadius:15,borderTopRightRadius:15}}>
            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
            <Text style={{color:"#fff",fontWeight:700}}>Pendiente de entrega</Text>
          </View>
          <View style={{marginTop:60,width:"100%",padding: 20,gap:10}}>
            <Text>Cliente: Sofía Fernández</Text>
            <Text>Direccion: Calle de los Pájaros 456</Text>
            <Text>Pagado</Text>
            <Button title='ver detalle'/>
          </View>
          {/* Contenido del View interno */}
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
    minHeight: "100%",
    
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: "90%",
    //padding:20,
    position:"relative",
    shadowColor: '#45474B',
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // Solo para Android
    marginTop:30
  },
  detalle : {
    backgroundColor:"grey",
    
  }
});
