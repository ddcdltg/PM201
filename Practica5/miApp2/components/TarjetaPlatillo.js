/* Utilizando props */
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export const TarjetaPlatillo = (props) => {

  const [observacion, setObservacion] = useState('')

  return (

    <View>
      
      <Text> Nombre: {props.nombre} </Text>
      <Text> Precio: {props.precio} </Text>
      <Text> PaisOrigen {props.paisorigen} </Text>
      <Text>Observacion: {props.observacion}</Text>
      

      <TextInput
        placeholder='observacion'
        value={observacion}
        onChangeText={setObservacion}
      />

    </View>
  );
} 