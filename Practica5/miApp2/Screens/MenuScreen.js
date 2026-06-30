//Zona 1: Importación de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React,{useEffect, useState} from 'react'
import TarjetasScreen from './TarjetasScreen'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Componente3 from './Componente3'
import Componente4 from './Componente4'
import Componente5 from './Componente5'
import Componente6 from './Componente6'
import Componente7 from './Componente7'
import Componente8 from './Componente8'
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
        case 'componente2':
            return <Componente2/>;
        case 'componente3':
            return <Componente3/>;
        case 'componente4':
            return <Componente4/>;
        case 'componente5':
            return <Componente5/>;
        case 'componente6':
            return <Componente6/>;
        case 'componente7':
            return <Componente7 setScreen={setScreen}/>;
        case 'componente8':
            return <Componente8/>;
        case 'imagenFondo':
            return <ImagenFondo style={styles.container}/>
        case 'home':
            return <Home/>
        case 'splashScreen':
            return <SplashScreen/>
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                        
                        <Text style={styles.titulo}>Menú de prácticas</Text>

                        <Button title="Práctica Tajetas" onPress={()=>setScreen('tarjetas')}></Button>

                        <Button title="Práctica Componente1" onPress={()=>setScreen('componente1')}></Button>

                        <Button title="Práctica SafeArea y ScrollView" onPress={()=>setScreen('componente2')}></Button>

                        <Button title="Práctica PressableScreen" onPress={()=>setScreen('componente3')}></Button>

                        <Button title="Práctica SwitchScreen" onPress={()=>setScreen('componente4')}></Button>

                        <Button title="Práctica TextInput" onPress={()=>setScreen('componente5')}></Button>

                        <Button title="Práctica Alert" onPress={()=>setScreen('componente6')}></Button>

                        <Button title="Práctica FlatList" onPress={()=>setScreen('componente7')}></Button>

                        <Button title="Práctica SectionList" onPress={()=>setScreen('componente8')}></Button>

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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});