/* SectionList */
import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

export default function Componente8() {
  const datos = [
    {
      title: 'Ingeniería en Sistemas',
      data: [
        { nombre: 'Dalixia' },
        { nombre: 'Regina' }
      ]
    },
    {
      title: 'Administración',
      data: [
        { nombre: 'Alonso' },
        { nombre: 'Javier' }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Estudiantes por carrera
      </Text>

      <SectionList
        sections={datos}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {section.title}
          </Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.nombre}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f0cae6',
    padding: 10
  },
  item: {
    padding: 15
  }
});