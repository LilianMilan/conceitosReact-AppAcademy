import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'
import { Titulo } from './index'

function ParImpar(props) {
    const [numero, setNumero] = useState(props.num)

    const handleIncrement = () => {
        setNumero(numero + 1)
    }

    return (
        <View style={[styles.Container]}>
            <Titulo principal="ParImpar" />
            <Text style={[styles.Text]}>{numero}</Text>
            {
                props.num % 2 == 0
                    ? <Text style={[styles.Text]}>Eh Par</Text>
                    : <Text style={[styles.Text]}>Eh Impar</Text>
            }
            <Button title='Incrementar' onPress={handleIncrement} />
        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    Text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000'
    }
})
export default ParImpar