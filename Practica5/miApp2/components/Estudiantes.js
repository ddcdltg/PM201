import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

export function Estudiantes(props){
return(
    <View style={styles.card}>
        <Text>
        Nombre:{props.nombre}
        </Text>
        
        <Text>
        Carrera:{props.carrera}
        </Text>
    </View>
    )
}

const styles=StyleSheet.create({
    card:{
    backgroundColor:'#eb9ec7',
    padding:15,
    margin:10,
    borderRadius:10
    }
});