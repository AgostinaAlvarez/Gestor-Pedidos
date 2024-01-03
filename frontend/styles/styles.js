// styles.js

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  box:{
    with:"100%",
    height:30,
    backgroundColor:"red"
  },
  containerGrn:{
    flex: 1,
    alignItems:"center",
    width:"100%",
    backgroundColor:"#fff"
  },

  headerSection:{
    width:"80%",
    borderBottomColor:"black",
    borderBottomWidth:1,
    borderBottomStyle:"solid",
    alignItems:"center",
    paddingTop:30,
    paddingBottom:30,
    gap:10
  },
  
  headerTitle:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },

  section:{
    width:"80%",
    //borderColor:"black",
    //borderWidth:1,
    //borderStyle:"solid",
    alignItems:"center",
    //height:140,
    paddingTop:15,
    paddingBottom:15,
    gap:10,
    //backgroundColor:"red"
  },

  section2:{
    width:"80%",
    //borderBottomColor:"black",
    //borderBottomWidth:1,
    //borderBottomStyle:"solid",
    //alignItems:"center",
    //height:140,
    paddingTop:20,
    paddingBottom:20,
    gap:10,
    position:"relative"
    //backgroundColor:"green"
  },

  selectItem:{
    flexDirection:"row",
    gap:5,
    //borderColor:"black",
    //borderWidth:1,
    //borderStyle:"solid",
    alignItems:"center"
  },
  card:{
    width:"100%",
    borderColor:"#00000059",
    borderWidth:1,
    borderStyle:"solid",
    padding:15,
    paddingTop:23,
    paddingBottom:23,
    borderRadius:7,
    gap:7
  },

  //pedido nuevo

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


});

export default estilos;
