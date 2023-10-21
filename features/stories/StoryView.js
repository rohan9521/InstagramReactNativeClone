import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StoryView = (props) => {
  return (
    <View style={style.container}>
      <Text>123as</Text>
    </View>
  )
}

export default StoryView

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:1200,
        height:50,
        width:50,
        borderWidth:3,
        margin:10,
        
        borderColor:'black',
    }
})