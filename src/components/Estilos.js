import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

function Estilos() {

    return (
        <View style={styles.Container} >
            <Text style={[styles.App, styles.App2]}>Estilos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#A00',
        height: 100
    },
    App: {
        color: '#000',
        fontSize: 30,
    },
    App2: {
        backgroundColor: 'blue',

    }

})

export default Estilos