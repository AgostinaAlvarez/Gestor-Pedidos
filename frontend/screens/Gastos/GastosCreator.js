

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Medios from '../../componets/Medios.js';

export default function GastosCreator() {

  const [total,setTotal] = useState(0)

  const [text, setText] = useState('');
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    console.log( typeof setTotal)
  }, [])
  

  const handleTextChange = (newText) => {
    setText(newText);
    console.log(newText)
    // Calcula la altura del texto
    const textLines = newText.split('\n').length;
    const newHeight = textLines * 30; // Puedes ajustar el valor según tus necesidades
    setTextHeight(newHeight);
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text>Nuevo gasto</Text>
        </View>
        <View style={styles.section}>
          <Medios
            setTotal={setTotal}
          />          
          {
            /*
            
            <Medios 
              
            />
            
            */
          }
          
        </View>
        <View style={styles.section}>
          <Text style={{fontWeight:"700",marginBottom:10,marginTop:7}}>Total ${total}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{fontWeight:"700",marginBottom:10,marginTop:7}}>Descripcion</Text>
          <TextInput
            multiline
            value={text}
            onChangeText={handleTextChange}
            style={{ height: Math.max(55, textHeight), width:"100%",
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"black",
            borderRadius:5,paddingTop:10, paddingLeft:7,paddingRight:7 }} // Establece una altura mínima de 40 y la altura calculada
          />
        </View>
        <View style={styles.section}>
          <Text style={{fontWeight:"700",marginBottom:10,marginTop:7}}>Fecha</Text>
        </View>
        <Button title='aceptar'/>
        <StatusBar style="auto" />
      </View>
      <View style={{width:"100%", height:500}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:"100%",
    backgroundColor: '#fff',
  },

  headerSection:{
    width:"80%",
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"black",
    paddingTop:30,
    paddingBottom:30,
    alignItems:"center"
  },

  section:{
    width:"80%",
    //borderColor:"black",
    //borderWidth:1,
    //borderStyle:"solid",
    //alignItems:"center",
    //height:140,
    paddingTop:15,
    paddingBottom:15,
    gap:10
  },

  inputt:{
    //paddingTop:20,
    //paddingBottom:20,
    paddingLeft:7,
    minHeight:50,
    width:"100%",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    borderRadius:5,
    
  }
});
