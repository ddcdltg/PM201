import React, { useState, useEffect } from 'react';
import { SplashScreen } from './Screens/SplashScreen';
import { Home } from './Screens/Home';

export default function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 2000);

    return () => clearTimeout(temporizador);
  }, []);

  if (cargando) {
    return <SplashScreen />;
  }

  return <Home />;
}