import { StyleSheet, Text, View } from 'react-native';
import GastosCard from './GastosCard';

export default function GastosLista({list}) {
  return (
    <View style={styles.ingresosContainer}>
      {
        list.map((item)=>
          <GastosCard
            key={item.medio+item.fecha+item.monto.toString()}
            item={item}
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
    width:"100%"
  },
  ingresosContainer:{
    width:"87%",
    //borderColor:"red",
    //borderStyle:"solid",
    //borderWidth:1,
    gap:15
  }
});
