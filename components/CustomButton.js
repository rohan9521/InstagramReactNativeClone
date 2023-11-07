import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ title, pressHandler,width,color }) => {
    let setWidth= width == null ? 300:width
    let setColor =  '#3288cf' 
    return (
        <View style={[style.outerContainer,width={setWidth}]}>
            <Pressable onPress={pressHandler}  style={[style.innerContainer,backgroundColor={setColor}]} android_ripple={{color:'#dfe2ed'}}>
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
        backgroundColor: '#3288cf' 
    },
    outerContainer: {
        borderRadius: 28,
        margin: 10,
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