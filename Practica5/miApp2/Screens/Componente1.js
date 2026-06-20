//Zona 1: Importación de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

//Zona 2: Main - Componentes
export default function Componente1() {
  return (
    <View>
        <Text> Primer practica de Componentes Nativos </Text> 
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
    flexDirection: 'row',
  },

});
