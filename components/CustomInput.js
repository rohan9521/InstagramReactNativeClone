import { View, StyleSheet, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = (props) => {

    return (
        <TextInput
            style={styles.container}
            placeholder={props.placeholder}
            onChangeText={props.setText}
            value={props.text} />
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        height: 40
    }
})