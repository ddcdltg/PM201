/* Componente SwitchScreen */
import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export default function Componente4() {

    const [encendido, setEncendido] = useState(false);

    return (

        <View
            style={[
                styles.container,
                {
                    backgroundColor: encendido ? '#222' : '#fff'
                }
            ]}
        >

            <Text
                style={{
                    color: encendido ? 'white' : 'black'
                }}
            >
                {encendido
                    ? 'Modo oscuro activado'
                    : 'Modo oscuro desactivado'}
            </Text>

            <Switch
                value={encendido}
                onValueChange={setEncendido}
                trackColor={{
                    false: '#efa7d9',
                    true: '#db63bd'
                }}
                thumbColor={
                    encendido
                        ? '#f7a9d4'
                        : '#da5fa6'
                }
            />

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

});