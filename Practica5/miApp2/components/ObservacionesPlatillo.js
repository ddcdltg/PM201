import React, { useState } from 'react';
import {ObservacionesPlatillo, Button, Pressable, Text, View } from 'react-native';

export default fuction ObservacionesPlatillo () {
    const [Observacion, setObservacion] = useState('');
return (
    <View>
        
    </View>
);
}


/* 
//alertas para que funcione en web 
if (Platform.OS === "web") {
  Alert.alert = (titular, mensaje, botones) => {
    if (botones && botones.length > 0) {
      const resultado = window.confirm(
        titular + (mensaje ? "\n" + mensaje : "")
      );

      if (resultado) {
        const observacion guardardada = botones.find(b => b.text === "Guardar");
        if (observacion guardardada && guardar.onPress) {
          guardar.onPress();
        }
      } else {
        const cancelar observacion = botones.find(b => b.style === "cancel");
        if (cancelar observacion && cancelar.onPress) {
          cancelar.onPress();
        }
      }
    } else {
      window.alert(titular + (mensaje ? "\n" + mensaje : ""));
    }
  };
}


 */