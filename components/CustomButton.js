import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ title, pressHandler }) => {
    return (
        <View style={style.outerContainer}>
            <Pressable onPress={pressHandler}  style={style.innerContainer} android_ripple={{color:'#dfe2ed'}}>
                    <Text style={style.text}>{title}</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    innerContainer: {
        paddingVertical: 5,
        paddingHorizontal: 16,
        elevation: 8,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3288cf',
    },
    outerContainer: {
        borderRadius: 28,
        margin: 10,
        width: 300,
        height: 40,
        overflow:'hidden',
    },
    text: {
        color: 'white',
        textAlign: 'center', 
        fontSize:15
    }
})

export default CustomButton