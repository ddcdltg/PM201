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
import { View, Text, Button, StyleSheet} from 'react-native';
import React,{ useState } from 'react';


export const Perfil = ({nombre,carrera,materia,cuatrimestre, style}) => {
  const[mostrar, setMostrar] = useState(false);


  return (

    <View style={[estilos.tarjeta, style]}>
      
      <Text style={estilos.nombre} > {nombre} </Text>
      
      {mostrar &&
      <>
      <Text style={estilos.carrera} > {carrera} </Text>
      <Text style={estilos.otroTexto} > {materia} </Text>
      <Text style={estilos.otroTexto} > {cuatrimestre} </Text>
      </>
      } 
    <Button title=" Ver perfil " onPress={ ()=>setMostrar(!mostrar)}> </Button>
     
    </View>
  );
}

const estilos= StyleSheet.create({
  nombre:{
    fontSize:24,
    fontWeight:'600',
    textTransform:'uppercase',
  }, /* todos los objetos se separan con una (,) */
  carrera:{
    fontSize:18,
    color:'pink',
    fontFamily:'Monserrat',
  },
  otroTexto:{
    fontSize:18,
    color:'pink',
    fontFamily:'Roboto',
    fontStyle:'italic',
  },
  tarjeta:{
    borderWidth: 2,
    padding:25, /* margen interior */
    margin:1, /*  margen exterior */
  },
});