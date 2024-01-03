import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function ConfigScreen() {
  const {SetLogOutApp} = useContext(AppContext)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Untitled.png")}
          style={styles.imgg}
        />
        <Text style={{marginBottom:3}}>RV Love Pasta</Text>
        <Text>@nombre</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="logout" size={24} color="black" />
        <TouchableOpacity onPress={()=>{SetLogOutApp()}}>
          <Text>Cerrar sesion</Text>
        </TouchableOpacity>
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
    paddingTop:10
  },
  header:{
    width:'90%',
    height:'40%',
    //backgroundColor:"red",
    borderColor:"black",
    borderWidth:1,
    borderStyle:"solid",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20,
    borderRadius:10
    //justifyContent:"flex-end",
    //paddingBottom:20
  },
  imgg:{
    height: 160,
    width:160,
    borderRadius:80,
    marginBottom:10
  },
  item:{
    width:"90%",
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    flexDirection:"row",
    gap:7,
    alignItems:"center",
    justifyContent:"center",
    //:"blue"
  }
});
