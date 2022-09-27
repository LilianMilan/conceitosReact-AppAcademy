import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Produtos from './mock/Produtos';
import Titulo from './Titulo';
function ListaProdutos(props) {

    const listar = () => {
        return Produtos.map((item) => {
            return (
                <Text key={item.id}>
                    {item.id} - {item.nome} - R${item.preco}
                </Text>
            )
        })
    }

    return (
        <View style={styles.Container}>
            <Titulo principal="Lista com map ()" />
            {listar()}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default ListaProdutos