//Zona 1: Importación de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Wave } from './components/Wave';
import { Wave2 } from './components/Wave2';


//Zona 2: Main - Componentes
export default function App() {
  return (

    <View style={styles.container}>
      
      <Image source={require('./assets/wave.png')}/>
      <Text>Hello Word React Native</Text>
      <Text>---------------------</Text>
      <Wave/>
      <Text>---------------------</Text>
      <Wave2/>
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
