import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native';

import {TarjetaPlatillo} from '../Components/TarjetaPlatillo';
import { useState } from 'react';

//Zona 2: Main - Componentes
export default function Platillos() {
  const [observaciones, setObservaciones] = useState([]);

  return (
    <View style={styles.container}>

        <TarjetaPlatillo style={styles.tarjetaAmarilla} nombre="Tacos" precio="$100" paisorigen="México" />
        <TarjetaPlatillo style={styles.tarjetaAzul} nombre="Hamburguesa" precio="$150" paisorigen="Alemania" />
        <TarjetaPlatillo style={styles.tarjetaAmarilla} nombre="Sushi" precio="$125" paisorigen="Japón" />

        <Pressable
          onPress={()=>{
            setObservaciones()
          }}
        ><Text>Enviar</Text></Pressable>
      <StatusBar style="auto" />

    </View>
  );
} 

//Zona 3: Estilos para que se vea lindo 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  tarjetaAmarilla:{backgroundColor:'#f1eaa4'},
  tarjetaAzul:{backgroundColor:'#bec8f4'},
});
