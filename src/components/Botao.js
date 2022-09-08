import React from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

function Botao(props) {

    function cadastrar(nome) {
        console.warn(`cadastrou ${nome}`);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => cadastrar("TouchableOpacity")}>
                <Text>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => cadastrar("TouchableWithoutFeedback")}>
                <View>
                    <Text>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <Button title="Cadastrar"
                onPress={() => cadastrar("Lilian")}
            />
        </View>
    )
}

export default Botao;