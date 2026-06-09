/* Utilizando props */
/* import { View, Text } from 'react-native';

export const Perfil = (props) => {
  return (

    <View>
      
      <Text> Nombre: {props.nombre} </Text>
      <Text> Carrera: {props.carrera} </Text>
      <Text> Materia: {props.materia} </Text>
      <Text> Cuatrimestre: {props.cuatrimestre} </Text>
     
    </View>
  );
}  */

/* Utilizando destructuración */
import { View, Text, Button } from 'react-native';
import React,{ useState } from 'react';


export const Perfil = ({nombre,carrera,materia,cuatrimestre}) => {
  const[mostrar, setMostrar] = useState(false);


  return (

    <View>
      
      <Text> Nombre: {nombre} </Text>
      
      {mostrar &&
      <>
      <Text> Carrera: {carrera} </Text>
      <Text> Materia: {materia} </Text>
      <Text> Cuatrimestre: {cuatrimestre} </Text>
      </>
      } 
    <Button title=" Ver perfil " onPress={ ()=>setMostrar(!mostrar)}> </Button>
     
    </View>
  );
}

