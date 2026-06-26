/* SafeArea y ScrollView*/
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native';

export default function Componente2() {

  const [tareas, setTareas] = useState([
    'Leer un libro',
    'Asistir a clases',
    'Cocinar',
    'Dormir temprano'
  ]);

  const agregarTarea = () => {
    setTareas([ ...tareas, `Nueva tarea ${tareas.length + 1}`]);
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>

      <Button title="Agregar tarea" onPress={agregarTarea} />

      <ScrollView contentContainerStyle={{ padding: 30}}>

        {tareas.map((tarea, index) => (
          <View key={index} style={{ marginBottom: 10, padding: 15, backgroundColor: '#ddd'}}>
            <Text>{tarea}</Text>
          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}