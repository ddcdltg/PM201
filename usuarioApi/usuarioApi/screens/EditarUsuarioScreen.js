import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, Alert, Platform, } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function EditarUsuarioScreen() {

  const usuario = useLocalSearchParams();

  const [nombre, setNombre] = useState(usuario.nombre);
  const [edad, setEdad] = useState(usuario.edad);
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const actualizarUsuario = async () => {

    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Campos vacíos', 'Completa todos los campos.');
      return;
    }

    try {

      setCargando(true);

      const respuesta = await fetch(
  `http://192.168.100.13:5000/v1/usuarios/${usuario.id}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic YWRtaW46MTIzNA==", 
    },
    body: JSON.stringify({
      nombre,
      edad: parseInt(edad),
    }),
  }
);

      const datos = await respuesta.json();

      console.log(datos);

      mostrarMensaje(
        'Éxito',
        'Los datos del usuario fueron actualizados.'
      );

      router.back();

    } catch (error) {

      console.log(error);

      mostrarMensaje(
        'Error',
        'No fue posible actualizar el usuario.'
      );

    } finally {

      setCargando(false);

    }

  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Actualizar Usuario
        </Text>

        <TouchableOpacity onPress={() => router.back()}>
  <Text>← Regresar</Text>
</TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable
          style={styles.boton}
          onPress={actualizarUsuario}
          disabled={cargando}
        >

          <Text style={styles.textoBoton}>
            {cargando ? "Guardando..." : "Guardar cambios"}
          </Text>

        </Pressable>

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1F2937',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#FBBF24',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  boton: {
  backgroundColor: "#2563EB",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
  marginBottom: 15,
},

textoBoton: {
  color: "white",
  fontWeight: "bold",
},

});