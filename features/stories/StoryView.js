import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const StoryView = (props) => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: "https://static.toiimg.com/thumb/msid-100267644,width-1280,resizemode-4/100267644.jpg"
        }}
      />
    </View>
  )
}

export default StoryView

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 60,
    width: 60,
   
    margin: 5,
  },
  image: {
    width: 60,
    height: 60,
    overflow:'hidden',
    borderRadius:1000
  }
})