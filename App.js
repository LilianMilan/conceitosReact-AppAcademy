
import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native'
/* import { Primeiro, CompPadrão, Component1, Component2, Estilos, MinMax, Titulo, Botao, Contador } from './src/components' */
/* import Calculator from './src/screens/Calculator' */
/* console.warn('aviso') */
import { Forms, ListaComFlatList, ListaProdutos, UsuarioLogado, PaiDireto, ParImpar } from './src/components';

const App = () => {
  const [usuario, setUsuario] = useState({})

  const handleLogin = () => {
    setUsuario({ nome: "Lilian", email: "teste@email.com" })
  }

  return (
    <SafeAreaView>
      <Forms />
      {/*       <ListaComFlatList />
      <ListaProdutos /> */}
      {/*      <UsuarioLogado usuario={usuario} />
      <Button title='Fazer Login' onPress={handleLogin} />
      <Button title='sair' onPress={ }/> */}
      {/* <ParImpar num={10} /> */}
      {/*  <PaiDireto /> */}
      {/* <Calculator /> */}
      {/*       <Titulo principal="contador" />
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
      <Primeiro /> */}
    </SafeAreaView>
  );
};

export default App;
