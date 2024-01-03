import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PedidosCreator from "./screens/Pedidos/PedidosCreator";
import HomeScreen from "./screens/Home/HomeScreen";
import PedidosFilter from "./screens/Pedidos/PedidosFilter";
import IngresosHome from "./screens/Ingresos/IngresosHome";
import GastosHome from "./screens/Gastos/GastosHome";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import ClientesHome from "./screens/Clientes/ClientesHome";
import ClientesFilter from "./screens/Clientes/ClientesFilter";
import ClientesCreator from "./screens/Clientes/ClientesCreator";
import ProductosCreator from "./screens/Productos/ProductosCreator";
import ProductosHome from "./screens/Productos/ProductosHome";
import GastosCreator from "./screens/Gastos/GastosCreator";
import GastosFilter from "./screens/Gastos/GastosFilter";
import { createStackNavigator } from "@react-navigation/stack";
import BalanceScreen from "./screens/Balance/BalanceScreen";
import BalanceFilter from "./screens/Balance/BalanceFilter";
import IngresosFilter from "./screens/Ingresos/IngresosFilter";
import IngresosCreator from "./screens/Ingresos/IngresosCreator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalendarioScreen from "./screens/Home/CalendarioScreen";
import ConfigScreen from "./screens/Home/ConfigScreen";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

const { createDrawerNavigator } = require("@react-navigation/drawer");
const { NavigationContainer } = require("@react-navigation/native");

const TopTab = createMaterialTopTabNavigator()

function PedidosTopTab (){
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="buscar" component={PedidosFilter} />
      <TopTab.Screen name="nuevo" component={PedidosCreator}/>
    </TopTab.Navigator>
  )
}

function ClientesTopTab (){
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="buscar" component={ClientesFilter}/>
      <TopTab.Screen name="nuevo" component={ClientesCreator}/>
    </TopTab.Navigator>
  )
}

function ProductosTopTab (){
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="todos" component={ProductosHome}/>
      <TopTab.Screen name="nuevo" component={ProductosCreator}/>
    </TopTab.Navigator>
  )
}


function GastosTopTab (){
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="buscar" component={GastosFilter}/>
      <TopTab.Screen name="nuevo" component={GastosCreator}/>
    </TopTab.Navigator>
  )
}

function IngresosTopTab(){
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="buscar" component={IngresosFilter}/>
      <TopTab.Screen name="nuevo" component={IngresosCreator}/>
    </TopTab.Navigator>
  )
}

const BottomTab = createBottomTabNavigator()

function HomeBottomTab (){
  return(
    <BottomTab.Navigator initialRouteName="homeScreen">
      <BottomTab.Screen name="calendario" component={CalendarioScreen} options={{headerShown:false,title:"calendario", tabBarIcon:({color,size}) =>(<Feather name="calendar" size={28} color="black" />) }}/>
      <BottomTab.Screen name="homeScreen" component={HomeScreen} options={{headerShown:false,title:"inicio",tabBarIcon: ({color,size})=> (<AntDesign name="home" size={28} color="black" />)}}/>
      <BottomTab.Screen name="configuracion" component={ConfigScreen} options={{headerShown:false,title:"perfil", tabBarIcon: ({size,color})=>(<Feather name="user" size={28} color="black" />)}}/>
    </BottomTab.Navigator>
  )
}


const Stack = createStackNavigator()

function BalanceStack (){
  return(
    <Stack.Navigator initialRouteName="balanceScreen">
      <Stack.Screen name="balanceScreen" component={BalanceScreen} options={{headerShown:false,headerTitle:"volver"}}/>
      <Stack.Screen name="filtrarBalance" component={BalanceFilter} options={{headerTitle:""}}/>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator()

function MyDrawer (){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeBottomTab} options={{headerTitle:"",drawerIcon: ({color,size})=> (<AntDesign name="home" size={24} color="black" />) }}/>
      <Drawer.Screen name="pedidos" component={PedidosTopTab} options={{drawerIcon: ({color,size})=> (<MaterialCommunityIcons name="clipboard-edit-outline" size={24} color="black" />) }}/>
      <Drawer.Screen name="productos" component={ProductosTopTab} options={{drawerIcon: ({color,size})=> (<Feather name="box" size={24} color="black" />) }}/>
      <Drawer.Screen name="ingresos" component={IngresosTopTab} options={{drawerIcon: ({color,size})=> (<Feather name="arrow-down-right" size={24} color="black" />) }}/>
      <Drawer.Screen name="gastos" component={GastosTopTab} options={{drawerIcon: ({color,size})=> (<Feather name="arrow-up-left" size={24} color="black" />) }}/>
      <Drawer.Screen name="balance" component={BalanceStack} options={{headerTitle: "Balance",headerTintColor:"#fff",headerStyle: {backgroundColor:"#00B1EA"},drawerIcon: ({color,size})=> (<MaterialIcons name="attach-money" size={24} color="black" />) }}/>
      <Drawer.Screen name="clientes" component={ClientesTopTab} options={{drawerIcon: ({color,size})=> (<AntDesign name="contacts" size={24} color="black" />) }}/>
    </Drawer.Navigator>
  )
}


export default function Navigation (){
  const {createBalance,month} = useContext(AppContext)
  useEffect(() => {
    createBalance(month)
  }, [])
  
  return(
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )

}