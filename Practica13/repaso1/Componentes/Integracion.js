/* Zona 1: Importación de archivos y componentes
 */import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, Platform } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';

/* Parche para que Alert funcione en web */
if (Platform.OS === 'web') {
  Alert.alert = (titular, mensaje, botones) => {
    if (botones && botones.length > 0) {
      const resultado = window.confirm(
        titular + (mensaje ? '\n' + mensaje : '')
      );
      if (resultado) {
        const aceptar = botones.find(b => b.text === 'Aceptar');
        if (aceptar && aceptar.onPress) aceptar.onPress();
      } else {
        const cancelar = botones.find(b => b.style === 'cancel');
        if (cancelar && cancelar.onPress) cancelar.onPress();
      }
    } else {
      window.alert(titular + (mensaje ? '\n' + mensaje : ''));
    }
  };
}

/* Zona 2: Main - Componente de Registro */
export default function RegistroEvento() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {

/* Validar campos vacíos */
    if (nombre === '' || carrera === '' || semestre === '') {
      Alert.alert('Error', 'No se permiten campos vacíos');
      return;
    }

/* Validar que semestre sea numérico */
    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un valor numérico');
      return;
    }

/* Mostrar resumen */
    Alert.alert(
      'Registro Exitoso',
      'Nombre: ' + nombre + '\n' +
      'Carrera: ' + carrera + '\n' +
      'Semestre: ' + semestre + '\n' +
      'Taller: ' + (taller ? 'Sí' : 'No') + '\n' +
      'Constancia: ' + (constancia ? 'Sí' : 'No') + '\n' +
      'Deportes: ' + (deportes ? 'Sí' : 'No'),
      [{ text: 'Aceptar' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        <Text style={styles.titulo}>Registro a Evento</Text>

        <Text>Nombre completo</Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu nombre'
          value={nombre}
          onChangeText={setNombre}
        />

        <Text>Carrera</Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu carrera'
          value={carrera}
          onChangeText={setCarrera}
        />

        <Text>Semestre</Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu semestre'
          value={semestre}
          onChangeText={setSemestre}
          keyboardType='numeric'
        />

        <View style={styles.switchRow}>
          <Text>¿Asistirá al taller?</Text>
          <Switch
            value={taller}
            onValueChange={setTaller}
            trackColor={{ false: '#ccc', true: '#6BCB77' }}
            thumbColor={taller ? '#fff' : '#fff'}
          />
        </View>

        <View style={styles.switchRow}>
          <Text>¿Requiere constancia?</Text>
          <Switch
            value={constancia}
            onValueChange={setConstancia}
            trackColor={{ false: '#ccc', true: '#6BCB77' }}
            thumbColor={constancia ? '#fff' : '#fff'}
          />
        </View>

        <View style={styles.switchRow}>
          <Text>¿Participará en actividades deportivas?</Text>
          <Switch
            value={deportes}
            onValueChange={setDeportes}
            trackColor={{ false: '#ccc', true: '#6BCB77' }}
            thumbColor={deportes ? '#fff' : '#fff'}
          />
        </View>

        <Button title='Enviar Registro' onPress={enviarRegistro} />

      </ScrollView>
    </SafeAreaView>
  );
}

/* Zona 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    fontSize: 15,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});