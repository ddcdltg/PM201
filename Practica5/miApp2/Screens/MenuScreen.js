//Zona 1: Importación de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React,{useEffect, useState} from 'react'
import TarjetasScreen from './TarjetasScreen'
import Componente1 from './Componente1'
import {ImagenFondo} from './ImagenFondo';
import { SplashScreen } from './SplashScreen';
import { Home } from './Home';

//Zona 2: Main - Componentes
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    useEffect(() => {
        if (screen === 'splashScreen'){
            const timer = setTimeout(() => {
                setScreen('home');
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    switch (screen) {
        case 'tarjetas': 
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>;
        case 'imagenFondo':
            return <ImagenFondo style={styles.container}/>
        case 'home':
            return <Home/>
        case 'splashScreen':
            return <SplashScreen/>
        case 'menu':
            default:
                return (
                    <View>
                        <Text>Menú de prácticas</Text>
                        <Button title="Práctica Tajetas" onPress={()=>setScreen('tarjetas')}></Button>

                        <Button title="Práctica Componente1" onPress={()=>setScreen('componente1')}></Button>

                        <Button title="Imagen Fondo" onPress={()=>setScreen('imagenFondo')}/>

                        <Button title="Splash Screen" onPress={()=>setScreen('splashScreen')}/>
                    </View>
                );//Return
    }//Switch
}//Función

//Zona 3: Estilos para que se vea lindo 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },

});
