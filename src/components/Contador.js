import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

function Contador(props) {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => {
        setNumero(numero + props.intervalo)
    }

    const dec = () => {
        setNumero(numero - props.intervalo)
    }
    return (
        <View>
            <Button onPress={inc} title="+" />
            <Text>{numero}</Text>
            <Button onPress={dec} title="-" />
        </View>

    )
}

export default Contador;