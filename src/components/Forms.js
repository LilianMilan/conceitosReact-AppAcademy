import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import Titulo from './Titulo';
import Botao from './Botao';



function Forms(props) {

    function handle() {
        const forms = {
            nome,
            email,
            cpf,
            tel,
            dn
        }
        console.warn(forms)
    }
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [tel, setTel] = useState('')
    const [dn, setDn] = useState('')

    return (
        <View style={styles.Container}>
            <Titulo principal="FORMULÁRIO" />
            <TextInput style={styles.Input}
                type='text'
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />

            <TextInput style={styles.Input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={email => setEmail(email)}
            />

            <TextInput style={styles.Input}
                placeholder="Digite seu CPF"
                value={cpf}
                keyboardType="numeric"
                maxLength={11}
                onChangeText={cpf => setCpf(cpf)}
            />

            <TextInput style={styles.Input}
                placeholder="Digite seu Telefone"
                value={tel}
                keyboardType="numeric"
                maxLength={11}
                onChangeText={tel => setTel(tel)}
            />

            <TextInput style={styles.Input}
                placeholder="Data de nascimento"
                value={dn}
                keyboardType="numeric"
                onChangeText={dn => setDn(dn)}
            />

            <Button style={styles.Button} title="enviar" onPress={() => handle()}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    Container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4FF',
        padding: 20,
    },
    Input: {
        width: '100%',
        height: 40,
        color: 'black',
        marginLeft: 35,
        marginRight: 35,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: '#fff',
        marginVertical: 2,
    },
})
export default Forms