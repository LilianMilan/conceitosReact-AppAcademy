import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import Titulo from '../Titulo';
import MaskInput from 'react-native-mask-input';
function Forms(props) {
    function handleForms() {
        const forms = {
            nome,
            email,
            cpf,
            phone,
            dtnasc,
        }
        console.warn(forms)
    }

    const cpf_mask = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
    const cnpj_mask = [/\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/, "-", /\d/, /\d/]

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [dtnasc, setDtNasc] = useState('')

    return (
        <View style={styles.Container}>
            <Titulo principal="FORMULÁRIO" />
            <MaskInput style={styles.Input}
                type='text'
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />

            <MaskInput style={styles.Input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={email => setEmail(email)}
            />

            <MaskInput style={styles.Input}
                placeholder="Digite seu CPF"
                value={cpf}
                keyboardType="numeric"
                onChangeText={setCpf}
                mask={(text) => {
                    if (text.replace(/\D+/g, "").length <= 11) {
                        return cpf_mask
                    } else {
                        return cnpj_mask
                    }
                }}
            />

            <MaskInput style={styles.Input}
                placeholder="Digite seu Telefone"
                value={phone}
                keyboardType="numeric"
                mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                onChangeText={phone => setPhone(phone)}
            />

            <MaskInput style={styles.Input}
                type={'datetime'}
                placeholder="Data de nascimento"
                value={dtnasc}
                keyboardType="numeric"
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                onChangeText={dtnasc => setDtNasc(dtnasc)}
            />
            <TouchableOpacity style={styles.Button} onPress={() => handleForms()}>
                <Text style={styles.Text}>ENVIAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3333',
        padding: 20,
    },
    Input: {
        width: '100%',
        color: 'black',
        margin: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: '#fff',
    },
    Button: {
        width: '80%',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#6b8e23',
    },
    Text: {
        color: '#fff'
    },
})
export default Forms