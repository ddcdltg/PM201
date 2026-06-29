import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Integracion from './Componentes/Integracion';

export default function App() {
  return (
    <View style={styles.container}>
      <Integracion />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});