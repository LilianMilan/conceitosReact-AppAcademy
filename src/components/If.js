/* import React from 'react';
import { Text, StyleSheet } from 'react-native' */

function If(props) {
    if (props.test) {
        return props.children
    }
    return false
}

export default If