import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//import PieChart from 'react-native-pie-chart';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export default function BalanceScreen() {

  const {totalIngresos,totalGastos} = useContext(AppContext)

  useEffect(() => {
    console.log(totalIngresos)
    console.log(totalGastos)
  }, [])
  
  
  const datos ={
    ingresos: 50000,
    gastos: 7500,
    pagosPendientes: 25000,
    sueldosAcumulados: {
      vale:10000,
      renzo:5000
    },
    ahorros: 40000,
    retiros: {
      sueldoVale:7500,
      sueldoRenzo:7500,
      ahorros:0
    },
    capital:{
      efectivo: 35500,
      mp: 40000,
      banco:7000
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{backgroundColor:"#fff", paddingTop:10, paddingBottom:10,paddingLeft:40,paddingRight:40, borderRadius:40, marginBottom:7, marginTop:3}}>
          <Text>Junio</Text>
        </TouchableOpacity>
        <Text style={{color:"#fff",fontSize:50, fontWeight:"600"}}>${datos.ingresos+datos.sueldosAcumulados.vale+datos.sueldosAcumulados.renzo+datos.ahorros-datos.gastos-datos.retiros.sueldoVale-datos.retiros.sueldoRenzo-datos.retiros.ahorros}</Text>
      </View>
      <View style={styles.contenido}>
        <ScrollView style={styles.scrollTest} showsVerticalScrollIndicator={false}>
          {/*Esto es un item*/}
          <View style={styles.registerItem}>
            <View style={{width:"75%", paddingTop:15, paddingBottom:15, paddingLeft:15, backgroundColor:"#BCDBA9", flexDirection:"row", justifyContent:"center", borderRadius:10, gap:10}}>
              <View style={{height:35,width:35,backgroundColor:"#33AB5F",borderRadius:"50%",alignItems:"center",justifyContent:"center"}}>
                <MaterialIcons name="attach-money" size={30} color="#BCDBA9" />
              </View>
              <View style={{width:"80%"}}>
                <Text>Ingresos</Text>
                <Text style={{fontSize:28}}>${totalIngresos}</Text>
              </View>
            </View>
            <View style={{width:"20%",paddingTop:15, paddingBottom:15,backgroundColor:"#33AB5F",alignItems:"center",justifyContent:"center",borderRadius:10}}>
              <TouchableOpacity onPress={()=>{console.log("f")}}>
                <Ionicons name="ios-add-sharp" size={40} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/*aca termina el item*/}
          <View style={styles.registerItem}>
            <View style={{width:"75%", paddingTop:15, paddingBottom:15, paddingLeft:15, backgroundColor:"#ffc2d1", flexDirection:"row", justifyContent:"center", borderRadius:10, gap:10}}>
              <View style={{height:35,width:35,backgroundColor:"#fb6f92",borderRadius:"50%",alignItems:"center",justifyContent:"center"}}>
                <Feather name="arrow-up-left" size={30} color="#ffc2d1" />
              </View>
              <View style={{width:"80%"}}>
                <Text>Gastos</Text>
                <Text style={{fontSize:28}}>${totalGastos}</Text>
              </View>
            </View>
            <View style={{width:"20%",paddingTop:15,paddingBottom:15,backgroundColor:"#fb6f92",alignItems:"center",justifyContent:"center",borderRadius:10}}>
              <TouchableOpacity>
                <Ionicons name="ios-add-sharp" size={40} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.registerItem}>
            <View style={{width:"75%", paddingTop:15, paddingBottom:15, paddingLeft:15, backgroundColor:"#90e0ef", flexDirection:"row", justifyContent:"center", borderRadius:10, gap:10}}>
              <View style={{height:35,width:35,backgroundColor:"#00b4d8",borderRadius:"50%",alignItems:"center",justifyContent:"center"}}>
                <SimpleLineIcons name="wallet" size={23} color="#90e0df" />
              </View>
              <View style={{width:"80%"}}>
                <Text>Retiros</Text>
                <Text style={{fontSize:28}}>${datos.retiros.sueldoVale+datos.retiros.sueldoRenzo+datos.retiros.ahorros}</Text>
              </View>
            </View>
            <View style={{width:"20%",paddingTop:15,paddingBottom:15,backgroundColor:"#00b4d8",alignItems:"center",justifyContent:"center",borderRadius:10}}>
              <TouchableOpacity>
                <Ionicons name="ios-add-sharp" size={40} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.registerItem}>
            <View style={{width:"97%", paddingTop:20, paddingBottom:20, paddingLeft:5, backgroundColor:"#b5ead6", flexDirection:"row", justifyContent:"center", borderRadius:10, gap:10}}>
              <View style={{height:35,width:35,backgroundColor:"#78dab8",borderRadius:"50%",alignItems:"center",justifyContent:"center"}}>
                <AntDesign name="hourglass" size={24} color="#ffff" />
              </View>
              <View style={{width:"80%"}}>
                <Text>Pagos pendientes</Text>
                <Text style={{fontSize:28}}>${datos.pagosPendientes}</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.registerItem}>
            <View style={{width:"97%", paddingTop:20, paddingBottom:20, paddingLeft:5, backgroundColor:"#ffdac0", flexDirection:"row", justifyContent:"center", borderRadius:10, gap:10}}>
              <View style={{height:35,width:35,backgroundColor:"#ffb888",borderRadius:"50%",alignItems:"center",justifyContent:"center"}}>
                <MaterialCommunityIcons name="piggy-bank-outline" size={30} color="#ffdac0" />
              </View>
              <View style={{width:"80%"}}>
                <Text>Ahorros</Text>
                <Text style={{fontSize:28}}>${datos.ahorros}</Text>
              </View>
            </View>
          </View>

          <View style={styles.registerItem}>
            <View style={{width:"97%", paddingTop:20, paddingBottom:20, paddingLeft:5, backgroundColor:"#c7ceea", flexDirection:"row", justifyContent:"center", borderRadius:10, gap:10}}>
              <View style={{height:35,width:35,backgroundColor:"#aab6dh",borderRadius:"50%",alignItems:"center",justifyContent:"center"}}>
                <Ionicons name="logo-buffer" size={24} color="black" />
              </View>
              <View style={{width:"80%"}}>
                <Text>Sueldos acumulados</Text>
                <Text style={{fontSize:28}}>$25000</Text>
                <Text style={{fontWeight:"500",fontSize:17, paddingLeft:15}}>Vale ${datos.sueldosAcumulados.vale}</Text>
                <Text style={{fontWeight:"500",fontSize:17, paddingLeft:15}}>Renzo ${datos.sueldosAcumulados.renzo}</Text>
              </View>
            </View>
          </View>


          {/*Aca van las divisiones*/}
          <View style={{width:"100%",paddingTop:20,paddingBottom:5,justifyContent:"center",paddingLeft:15}}>
            <Text style={{fontSize:18,fontWeight:"400"}}>Dinero disponible</Text>
          </View>
          <View style={styles.boxcont}>
            <View style={styles.boxItem}>
              <Image
                source={require('../../assets/mp.png')}
                style={styles.imm}
              />
              <Text style={{fontSize:13,marginBottom:4}}>Mercado pago</Text>
              <Text style={{fontSize:20,fontWeight:"500"}}>${datos.capital.mp}</Text>
            </View>
            <View style={styles.boxItem}>
              <Image
                source={require('../../assets/efectivo.jpg')}
                style={styles.imm}
              />
              <Text tyle={{fontSize:13,marginBottom:4}}>Efectivo</Text>
              <Text style={{fontSize:20,fontWeight:"500"}}>${datos.capital.efectivo}</Text>
            </View>
            <View style={styles.boxItem}>
              <Image
                source={require('../../assets/banco.jpg')}
                style={styles.imm}
              />
              <Text tyle={{fontSize:13,marginBottom:4}}>Banco</Text>
              <Text style={{fontSize:20,fontWeight:"500"}}>${datos.capital.banco}</Text>
            </View>
          </View>

          <View style={{width:"100%",paddingTop:10,paddingBottom:5,justifyContent:"center",paddingLeft:15,marginBottom:10,marginTop:25}}>
            <Text style={{fontSize:18,fontWeight:"400"}}>Division de cuentas</Text>
          </View>
          
          {
            /*
            <View style={styles.divBox2}>
              <PieChart
                widthAndHeight={180}
                series={[25, 25, 50]}
                sliceColor={['#fbd203', '#ffb300', '#ff9100']}
                //coverRadius={0.6}
                coverFill={'#FFF'}
              />
              <View>
                <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
                  <Octicons name="square-fill" size={20} color="#fbd203" />
                  <Text style={{fontSize:16}}>Gastos 25%</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
                  <Octicons name="square-fill" size={20} color="#ffb300" />
                  <Text style={{fontSize:16}}>Ahorros 25%</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
                  <Octicons name="square-fill" size={20} color="#ff9100" />
                  <Text style={{fontSize:16}}>Sueldos 50%</Text>
                </View>
              </View>
            </View>
            
            
            */
          }

          <View style={{width:"100%",paddingTop:10,paddingBottom:5,justifyContent:"center",paddingLeft:15,marginBottom:10,marginTop:15}}>
            <Text style={{fontSize:18,fontWeight:"400"}}>Division de cuentas en base al balance real</Text>
          </View>
          
          <View style={styles.divBox}>
            <Text>Margen de gastos ${datos.ingresos/4}</Text>
            <Text>Utilizado: ${datos.gastos}</Text>
            <Text>Disponible: ${(datos.ingresos/4)-datos.gastos}</Text>
          </View>

          <View style={styles.divBox}>
            <Text>Sueldos</Text>
            <Text>Vale: ${datos.ingresos/4}</Text>
            <Text>Acumulado: ${datos.sueldosAcumulados.vale}</Text>
            <Text>Retirado: ${datos.retiros.sueldoVale} ss</Text>
            <Text>Disponible: ${(datos.ingresos/4)+datos.sueldosAcumulados.vale-datos.retiros.sueldoVale}</Text>
            <Text></Text>
            <Text>Renzo: ${datos.ingresos/4}</Text>
            <Text>Acumulado: ${datos.sueldosAcumulados.renzo}</Text>
            <Text>Retirado: ${datos.retiros.sueldoRenzo}</Text>
            <Text>Disponible: ${(datos.ingresos/4)+datos.sueldosAcumulados.renzo-datos.retiros.sueldoRenzo}</Text>
          </View>

          <View style={styles.divBox}>
            <Text>Ahorros ${datos.ingresos/4}</Text>
            <Text>Acumulado: ${datos.ahorros}</Text>
            <Text>Retirado: ${datos.retiros.ahorros}</Text>
            <Text>Disponible: ${(datos.ingresos/4)+datos.ahorros-datos.retiros.ahorros}</Text>
          </View>

          <View style={{width:"100%",paddingTop:10,paddingBottom:5,justifyContent:"center",paddingLeft:15,marginBottom:10,marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:"400"}}>Division de cuentas incluyendo ingresos de pedidos pendientes de pago</Text>
          </View>
          
          <View style={styles.divBox}>
            <Text>Margen de gastos ${(datos.ingresos+datos.pagosPendientes)/4}</Text>
            <Text>Utilizado: ${datos.gastos}</Text>
            <Text>Disponible: ${((datos.ingresos+datos.pagosPendientes)/4)-datos.gastos}</Text>
          </View>

          <View style={styles.divBox}>
            <Text>Sueldos</Text>
            <Text>Vale: ${(datos.ingresos+datos.pagosPendientes)/4}</Text>
            <Text>Acumulado: ${datos.sueldosAcumulados.vale}</Text>
            <Text>Retirado: ${datos.retiros.sueldoVale}</Text>
            <Text>Disponible: ${((datos.ingresos+datos.pagosPendientes)/4)+datos.sueldosAcumulados.vale-datos.retiros.sueldoVale}</Text>
            <Text></Text>
            <Text>Renzo: ${(datos.ingresos+datos.pagosPendientes)/4}</Text>
            <Text>Acumulado: ${datos.sueldosAcumulados.renzo}</Text>
            <Text>Retirado: ${datos.retiros.sueldoRenzo}</Text>
            <Text>Disponible: ${((datos.ingresos+datos.pagosPendientes)/4)+datos.sueldosAcumulados.renzo-datos.retiros.sueldoRenzo}</Text>
          </View>

          <View style={styles.divBox}>
            <Text>Ahorros ${(datos.ingresos+datos.pagosPendientes)/4}</Text>
            <Text>Acumulado: ${datos.ahorros}</Text>
            <Text>Retirado: ${datos.retiros.ahorros}</Text>
            <Text>Disponible: ${((datos.ingresos+datos.pagosPendientes)/4)+datos.ahorros-datos.retiros.ahorros}</Text>
          </View>

          
          
          <View style={{width:"100%",height:80}}></View>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:"#00B1EA"
  },

  header:{
    height: "15%",
    width:"100%",
    alignItems:"center",
  },

  contenido:{
    width:"100%",
    height:"85%",
    backgroundColor:"#fff",
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    alignItems:"center",
    paddingTop:60
  },
  scrollTest:{
    width:"100%",
    height:"80%",
  },

  registerItem:{
    width:"95%",
    paddingTop:10,
    paddingBottom:10,
    marginLeft:"auto",
    marginRight:"auto",
    flexDirection:"row", 
    justifyContent:"center",
    gap:10,
  },

  divisionesCard:{
    width:"95%",
    marginLeft:"auto",
    marginRight:"auto", 
    paddingTop:20,
    paddingBottom:20, 
    backgroundColor:"red",
    marginBottom:20,
    paddingLeft:10
  },

  boxcont:{
    width:"100%",
    paddingTop:10,
    paddingBottom:30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:10
  },
  
  boxItem:{
    width:"30%",
    paddingTop:30,
    paddingBottom:30,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 30,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    backgroundColor: '#ffff',
  },

  imm:{
    height:50,
    width:50,
    marginBottom:4
  },

  divBox:{
    width:"90%",
    paddingTop:40,
    paddingBottom:40,
    paddingLeft:10,
    paddingRight:10,
    /*
    alignItems:"center",
    justifyContent:"center",
    */
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:35,
    borderRadius:10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 30,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    backgroundColor: '#ffff',
  },

  divBox2:{
    width:"95%",
    paddingTop:40,
    paddingBottom:40,
    flexDirection:"row",
    gap:15,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:35,
    borderRadius:10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 30,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    backgroundColor: '#ffff',
  }

});
