import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, ActivityIndicator, ImageBackground, Alert, StyleSheet } from 'react-native';
import { TarjetaLibro } from '../Components/TarjetaLibro';

export function Home() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  const agregarLibro = () => {
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos.');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      };

      setLibros((librosActuales) => [...librosActuales, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      Alert.alert('Éxito', 'El libro se agregó correctamente.');
    }, 4000);
  };

  return (
    <ImageBackground
      style={styles.fondo}
      source={require('../assets/fondo.jpg')}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Mis Libros Favoritos</Text>

        <View style={styles.formulario}>
          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            value={genero}
            onChangeText={setGenero}
          />

          <Pressable
            style={styles.boton}
            onPress={agregarLibro}
            disabled={cargando}
          >
            <Text style={styles.textoBoton}>
              {cargando ? 'Guardando...' : 'Agregar libro'}
            </Text>
          </Pressable>

          {cargando && (
            <ActivityIndicator
              size="large"
              color="#1D3557"
              style={styles.indicador}
            />
          )}
        </View>

        <FlatList
          style={styles.lista}
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TarjetaLibro
              titulo={item.titulo}
              autor={item.autor}
              genero={item.genero}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  formulario: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#1D3557',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
  indicador: {
    marginTop: 10,
  },
  lista: {
    flex: 1,
  },
});