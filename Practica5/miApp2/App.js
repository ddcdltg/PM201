//Zona 1: Importación de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Wave } from './components/Wave';
import { Wave2 } from './components/Wave2';
import { Perfil } from './components/Perfil';

//Zona 2: Main - Componentes
export default function App() {
  return (

    <View style={styles.container}>
      
      <Image source={require('./assets/wave.png')}/>
      <Perfil nombre="Dalixia" carrera="ISC" materia="PM" cuatrimestre="Noveno" />
      <Perfil nombre="Regina" carrera="ISC" materia="POO" cuatrimestre="Noveno" />
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
  },
});
