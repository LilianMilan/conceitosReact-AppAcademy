import { If } from './index'
import React from 'react'
import { Text } from 'react-native'


function UsuarioLogado(props) {
    const usuario = props.usuario || {}

    return (
        <>
            <If test={usuario && usuario.nome && usuario.email}>
                <Text>Usuario Logado</Text>
                <Text>{usuario.nome} - {usuario.email}</Text>
            </If>
            <If test={!usuario && !usuario.nome && !usuario.email}>
                <Text>Faça seu login</Text>

            </If>
        </>

    )
}

export default UsuarioLogado