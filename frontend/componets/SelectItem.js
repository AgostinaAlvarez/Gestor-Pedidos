import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import estilos from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Octicons } from '@expo/vector-icons';

export default function SelectItem({id,nombre,select,selected}) {
  return (
    <TouchableOpacity onPress={()=>{select(id)}}>
      <View style={estilos.selectItem}>
        {
          selected === true ?
          <Octicons name="dot-fill" size={27} color="black" />
          :
          <Octicons name="dot" size={27} color="black" />
        }
        <Text>{nombre}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
