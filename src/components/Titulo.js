import React from 'react';
import { Text, StyleSheet } from 'react-native'

function Titulo(props) {
    return (
        <>
            <Text style={styles.Text}>{props.principal}</Text>
            {
                props.secundario
                    ? <Text style={styles.Text2}>{props.secundario}</Text>
                    : ''
            }

        </>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Open Sans',
    },
    Text2: {
        backgroundColor: '#9393'
    }
})

export default Titulo