import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Display } from '../../components/calculator'

function Calculator() {
    const [display, setDisplay] = useState(0)
    const [numbers, setNumbers] = useState([0, 0])
    const [position, setPosition] = useState(0)
    const [operation, setOperation] = useState("");

    const clear = () => {
        setNumbers([0, 0]);
        setOperation("");
        setPosition(0);
        setDisplay(0);
    }

    const addDigit = (digit) => {
        let num = numbers;
        num[position] = digit
        setNumbers(num);
        setDisplay(num[position]);
    }

    const handleSetOperation = (operationParam) => {
        setOperation(operationParam);
        setPosition(1);
        setDisplay(operationParam);
    }

    const handleSetResult = (result) => {
        let num = numbers;
        num[0] = result;

        if (operation == "+") {
            result = (parseInt(numbers[0]) + parseInt(numbers[1]))
        } else if (operation == "-") {
            result = (parseInt(numbers[0]) - parseInt(numbers[1]))
        } else if (operation == "*") {
            result = (parseInt(numbers[0]) * parseInt(numbers[1]))
        } else if (operation == "/") {
            result = (parseInt(numbers[0]) / parseInt(numbers[1]))
        }

        setNumbers(num)
        setDisplay(result)
    }

    return (
        <View style={styles.Container}>
            <Display value={display} />
            <View style={styles.Buttons}>
                <Button label="AC" onPress={clear} />
                <Button label="()" onPress={handleSetOperation} />
                <Button label="%" onPress={handleSetOperation} />
                <Button label="/" onPress={handleSetOperation} />
            </View>
            <View style={styles.Buttons}>
                <Button label={7} onPress={addDigit} />
                <Button label={8} onPress={addDigit} />
                <Button label={9} onPress={addDigit} />
                <Button label="*" onPress={handleSetOperation} />
            </View>
            <View style={styles.Buttons}>
                <Button label={4} onPress={addDigit} />
                <Button label={5} onPress={addDigit} />
                <Button label={6} onPress={addDigit} />
                <Button label="-" onPress={handleSetOperation} />
            </View>
            <View style={styles.Buttons}>
                <Button label={1} onPress={addDigit} />
                <Button label={2} onPress={addDigit} />
                <Button label={3} onPress={addDigit} />
                <Button label="+" onPress={handleSetOperation} />
            </View>
            <View style={styles.Buttons}>
                <Button label="+/-" onPress={handleSetOperation} />
                <Button label={0} onPress={addDigit} />
                <Button label="," onPress={handleSetOperation} />
                <Button label="=" onPress={handleSetResult} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#ccc'
    },
    Buttons: {
        flexDirection: 'row',
    },

})

export default Calculator