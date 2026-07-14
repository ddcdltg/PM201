import { View, Text, Image, StyleSheet } from 'react-native';

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icono}
      />
      <Text style={styles.titulo}>Mis Libros Favoritos</Text>
      <Text>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icono: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});