import React from 'react';
import { Text, StyleSheet } from 'react-native'

function Titulo(props) {
    return (
        <>
            <Text style={styles.Text}>{props.principal}</Text>
            <Text style={styles.Text2}>{props.secundario}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 30
    },
    Text2: {
        backgroundColor: '#9393'
    }
})

export default Titulo