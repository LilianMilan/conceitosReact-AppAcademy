import React from 'react';
import { Text, StyleSheet, View } from 'react-native'
import Filho from './Filho'

function PaiDireto() {
    let x = 10;
    let y = 30;
    return (
        <View style={styles.Container}>
            <Filho a={x} b={y} />
            <Filho a={x + 40} b={y + 220} />
        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        backGroundColor: '#fff'
    }
})
export default PaiDireto