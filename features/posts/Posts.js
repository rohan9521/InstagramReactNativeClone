import { View, Text, Image } from 'react-native'
import React from 'react'

const Posts = (props) => {
  return (
    <View>
     <Image
      source={{
        uri:props.contentImageUrl
      }}
     />
     
    </View>
  )
}

export default Posts