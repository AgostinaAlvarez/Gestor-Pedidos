import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import PedidosScreenCard from './PedidosScreenCard';

export default function PedidosLista({list,remarqued}) {
  const [detalles,setDetalles] = useState(false)
  const [selectItem,setSelectItem] = useState(0)

  function verDetalles (id){
    console.log('estos son los detalles')
    console.log(id)
    setSelectItem(id)
    setDetalles(true)
  }

  function back (){
    setDetalles(false)
  }

  useEffect(() => {
    console.log('lista para renderizar')
    console.log(list)
  }, [])
  

  return (
    <View style={styles.pedidosContainer}>
        {
          
          list.map((item)=>
            <PedidosScreenCard
              key={item.id}
              item={item}
              remarqued={remarqued}
            />            
          )
          
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
  },
  pedidosContainer:{
    width:"87%",
    //borderColor:"red",
    //borderStyle:"solid",
    //borderWidth:1,
    gap:15
  }
});
