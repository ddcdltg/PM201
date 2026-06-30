import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
/* import { Wave } from './components/Wave';
import { Wave2 } from './components/Wave2'; */
import {Perfil} from '../Components/Perfil';

//Zona 2: Main - Componentes
export default function TarjetasScreen() {
  return (

    <View style={styles.container}>
      
      <Image source={require('../assets/wave.png')}/>

      <Perfil style={styles.tarjetaAzul} nombre="Dalixia" carrera="ISC" materia="PM" cuatrimestre="Noveno" />
      <Perfil style={styles.tarjetaAmarilla} nombre="Regina" carrera="ISC" materia="POO" cuatrimestre="Noveno" />
      <Perfil style={styles.tarjetaAzul} nombre="Dalixia" carrera="ISC" materia="PM" cuatrimestre="Noveno" />

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
