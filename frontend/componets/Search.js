import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import estilos from '../styles/styles';

export default function Search({inputText,searchList,data,HandleChange,selectItem}) {
  return (
    <View styles={styles.container}>
      <TextInput style={estilos.inputt} value={data} onChangeText={HandleChange}/>
      {
        inputText === "" ? 
        <></>
        :
        <>
          {
            searchList.length === 0 ?
            <></>
            :
            <View style={styles.searchContainer}>
              <ScrollView style={{backgroundColor:"#fff", zIndex: 999,borderRadius:10}}>
                  {
                    searchList.map((item)=>
                      <View style={styles.nameSearch}>
                        <TouchableOpacity style={{height:"100%",width:"100%",justifyContent:"center",paddingLeft:10}} onPress={()=>{selectItem(item)}}>
                          <Text>{item.nombre}</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                </ScrollView>
            </View>
          }
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    position:"relative",
    zIndex:100
  },

  inputt:{
    width:"100%",
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"#00000059",
    borderRadius:10,
  },

  searchContainer: {
    position: "absolute",
    zIndex: 2,
    top: "100%",
    borderWidth: 1,
    borderColor: "#00000059",
    borderStyle: "solid",
    width: "100%",
    height: 200,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  nameSearch:{
    width:"100%",
    height:34,
  },

});
