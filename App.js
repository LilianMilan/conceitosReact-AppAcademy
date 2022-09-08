
import React from 'react';
import { SafeAreaView } from 'react-native'
import { Primeiro, CompPadrão, Component1, Component2, Estilos, MinMax, Titulo, Botao, Contador } from './src/components'

/* console.warn('aviso') */

const App = () => {
  return (
    <SafeAreaView>
      <Titulo principal="contador" />
      <Contador inicial={20} intervalo={2} />
      <Titulo principal="botao" />
      <Botao />
      <Titulo principal="passando propriedade (props)" />
      <MinMax min="2" max="10" />
      <MinMax min={5} max={15} />
      <Titulo principal="adicionando css" />
      <Estilos />
      <Titulo principal="Componente com export default e sem default" />
      <CompPadrão />
      <Component1 />
      <Component2 />
      <Titulo principal="primeiro componente" />
      <Primeiro />
    </SafeAreaView>
  );
};

export default App;
