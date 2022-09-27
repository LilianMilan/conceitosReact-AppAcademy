import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity
} from 'react-native'

function Button(props) {

    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Button} onPress={() => props.onPress(props.label)}>
                <Text>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        minHeight: 100,
        minWidth: 100,
    }
})

export default Button
