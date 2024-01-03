import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Reloj() {
  const [time,setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date()
      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [])

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',

  };

  return (
    <View style={styles.container}>
      <Text>{time.toLocaleString('es-ES',options).toUpperCase()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
});
