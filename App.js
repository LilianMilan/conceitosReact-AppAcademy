
import React from 'react';
import { SafeAreaView } from 'react-native'
import { Primeiro, CompPadrão, Component1, Component2, Estilos, MinMax, Titulo } from './src/components'

/* console.warn('aviso') */

const App = () => {
  return (
    <SafeAreaView>
      <Titulo principal="Cosméticos" secundario="Rosto" />
      <MinMax min="2" max="10" />
      {/*       <MinMax min={5} max={15} /> */}
      <Estilos />
      <Primeiro />
      <CompPadrão />
      <Component1 />
      <Component2 />
    </SafeAreaView>
  );
};

export default App;
