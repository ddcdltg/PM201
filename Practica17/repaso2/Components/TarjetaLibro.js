import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function TarjetaLibro(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text>Autor: {props.autor}</Text>
      <Text>Género: {props.genero}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eb9ec7',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});