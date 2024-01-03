import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PedidosLista from '../PedidosLista';

export default function ByMonth({list}) {
  const [openMonth,setOpenMonth] = useState(false)
  const [openYear,setOpenYear] = useState(false)
  const options = [1,2,3,4,5,6,7,8,9,10,11,12]
  

  return (
    <View style={styles.container}>
      
      <Text>Busqueda por mes y año</Text>
      <View style={{width:200,backgroundColor:"red",position:"relative",zIndex:30}}>
        <TouchableOpacity onPress={()=>{setOpenMonth(!openMonth)}}>
          <View style={{paddingVertical:10,paddingHorizontal:25,backgroundColor:"green",borderRadius:20}}>
            <Text>Mes</Text>
          </View>
        </TouchableOpacity>
        {
          openMonth === true ?
          <View style={{position:"absolute",height:150,backgroundColor:"violet",top:"100%",width:200}}>
            <ScrollView style={{backgroundColor:"#fff", zIndex: 90,borderRadius:10}}>
              {
                options.map((item)=>
                  <View>
                    <Text>Mes {item}</Text>
                  </View>
                )
              }
            </ScrollView>
          </View>
          :
          <></>
        }
      </View>
      
      <View style={{width:200,backgroundColor:"red",position:"relative",zIndex:20}}>
        <TouchableOpacity onPress={()=>{setOpenYear(!openYear)}}>
          <View style={{paddingVertical:10,paddingHorizontal:25,backgroundColor:"green",borderRadius:20}}>
            <Text>anio</Text>
          </View>
        </TouchableOpacity>
        {
          openYear === true ?
          <View style={{position:"absolute",height:150,backgroundColor:"violet",top:"100%",width:200}}>
            <ScrollView style={{backgroundColor:"#fff", zIndex: 70,borderRadius:10}}>
              {
                options.map((item)=>
                  <View>
                    <Text>Mes</Text>
                  </View>
                )
              }
            </ScrollView>
          </View>
          :
          <></>
        }
      </View>

      <Button title="buscar"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
    width:"100%"
  },

  itemComtainer:{
    borderWidth:1,
    borderColor:"black",
    borderStyle:"solid",
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    gap:10
  }

});
