/* FlatList */
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { Estudiantes } from '../Components/Estudiantes';

export default function Componente7({ setScreen }) {

    const estudiantes = [
        {
            id: '1',
            nombre: 'Dalixia',
            carrera: 'ISC'
        },

        {
            id: '2',
            nombre: 'Regina',
            carrera: 'ISC'
        },

        {
            id: '3',
            nombre: 'Alonso',
            carrera: 'ISC'
        }
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Lista de estudiantes
            </Text>

            <FlatList

                data={estudiantes}

                renderItem={({ item }) => (

                    <Estudiantes
                        nombre={item.nombre}
                        carrera={item.carrera}
                    />

                )}

                keyExtractor={(item) => item.id}

            />

            <Button
            title="Regresar al menú"
            onPress={() => setScreen('menu')}
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

    card: {
        backgroundColor: '#f0cae6',
        padding: 15,
        margin: 10,
        borderRadius: 10
    }

});