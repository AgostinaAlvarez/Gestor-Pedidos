import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from '../../../context/AppContext';
import GastosLista from '../GastosLista';

export default function ByMonthAndYear({listaAcutual}) {
  const {gastos} = useContext(AppContext)
  const date = new Date()
  const [openMonth,setOpenMont] = useState(false)
  const [openYear,setOpenYear] = useState(false)

  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  const anios = ["2022","2023","2024","2025","2026","2027"]

  const month = date.getMonth()+1;
  const currentMonth = meses.find((item,index)=>index === month-1);
  const [selectedMonth,setSelectedMonth] = useState(currentMonth);

  const year = date.getFullYear();
  const currentYear = anios.find((item)=>item === year.toString());
  const [selectedYear,setSelectedYear] = useState(currentYear);

  const [listaGastos,setListaGastos] = useState(listaAcutual);

  function HandleChangeMonth (item,index){
    setOpenMont(!openMonth)
    setSelectedMonth(item)   
    const month = index+1
    const updateList = gastos.filter((item)=>item.mes === month)
    setListaGastos(updateList);
    //console.log(nmr)
  }

  //tiene que haber un handle change year

  useEffect(() => {
    setSelectedMonth(currentMonth)
    setSelectedYear(currentYear)
  }, [])
  


  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View style={styles.containerSelect}>
          
          <TouchableOpacity onPress={()=>setOpenMont(!openMonth)}>
            <View style={styles.btn}>
              <Text>{selectedMonth}</Text>
            </View>
          </TouchableOpacity>
          
          {
            openMonth === true ?
            <View style={styles.search}>
              <ScrollView>
                {
                  meses.map((item,index)=>
                  <TouchableOpacity onPress={()=>{HandleChangeMonth(item,index)}}>
                    <View style={styles.searchIcon} >
                      <Text>{item}</Text>
                    </View>
                  </TouchableOpacity>
                  
                  )
                }
              </ScrollView>
            </View>
            :
            <></>
          }
        </View>
        <View style={styles.containerSelect}>
          
          <TouchableOpacity onPress={()=>{setOpenYear(!openYear)}}>
            <View style={styles.btn}>
              <Text>{selectedYear}</Text>
            </View>
          </TouchableOpacity>
          {
            openYear === true ?
            <View style={styles.search}>
              <ScrollView>
                {
                  anios.map((item)=>
                  <TouchableOpacity onPress={()=>{setSelectedYear(item)}}>
                    <View style={styles.searchIcon} >
                      <Text>{item}</Text>
                    </View>
                  </TouchableOpacity>
                  
                  )
                }
              </ScrollView>
            </View>
            :
            <></>
          }


        </View>
      </View>
      {
        listaGastos.lenght === 0 ?
        <></>
        :
        <GastosLista
          list={listaGastos}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
  containerRow:{
    width:"100%",
    //borderWidth:1,
    //borderStyle:"solid",
    //borderColor:"black",
    paddingVertical:10,
    marginTop:10,
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    justifyContent:"center",
    zIndex:50
  },
  containerSelect:{
    //width:"30%",
    //backgroundColor:"violet",
    position:"relative",
    justifyContent:"center"
  },
  btn:{
    height:40,
    paddingHorizontal:60,
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"black",
    //backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
  },

  search:{
    position:"absolute",
    top:"101%",
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"black",
    width:"100%",
    height:150,
    backgroundColor:"#fff"
  },

  searchIcon:{
    width:"100%",
    paddingVertical:7,
    paddingLeft:10
  }
});
