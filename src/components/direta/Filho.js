import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

function Filho(props) {

    return (
        <View style={styles.Container}>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        backGroundColor: '#fff'
    }
})
export default Filho