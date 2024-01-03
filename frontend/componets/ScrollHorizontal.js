import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ScrollHorizontal({list,handleChange}) {
  return (
    <View style={{width:"100%",backgroundColor:"#EDEDED"}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.selectContainer}>
          {
            list.map((item)=>
              <TouchableOpacity key={item.id} onPress={()=>{handleChange(item.id)}}>
                <View style={item.selected === false ? styles.selectIcon : styles.selectIconCTA}>
                  <Text>{item.nombre}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        </View>
      </ScrollView>
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
  selectContainer:{
    width:"100%",
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:"row",
    gap:10,
    alignItems:"center"
  },

  selectIcon:{
    paddingTop:12,
    paddingBottom:12,
    borderColor:"#B0B0B0",
    borderWidth:1,
    borderStyle:"solid",
    paddingLeft:32,
    paddingRight:32,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center" 
  },
  selectIconCTA:{
    paddingTop:13,
    paddingBottom:13,
    borderColor:"#D0D0D0",
    borderWidth:1,
    borderStyle:"solid",
    paddingLeft:32,
    paddingRight:32,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff" 
  }
});
