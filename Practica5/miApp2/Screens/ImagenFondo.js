import {ImageBackground} from 'react-native';
import {Perfil} from '../Components/Perfil';
import {View, StyleSheet} from 'react-native';

export const ImagenFondo = (style) => {
    return (
    <ImageBackground style={styles.container} source={require('../assets/bg_2.jpeg')}>
        <View>
            <Perfil style={styles.perfil} nombre="Nombre de ejemplo" carrera="ISC" materia="Programacion" cuatrimestre="4to"/>
        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    perfil: {
        backgroundColor: 'gray'
    }
});