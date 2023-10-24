import { View, Text } from 'react-native'
import React from 'react'
import PostTopBar from './PostTopBar'
import PostContent from './content/PostContent'
import PostBottomView from './bottomview/PostBottomView'
import { StyleSheet } from 'react-native'

const PostView = () => {
  return (
    <View style={styles.container}>
      <PostTopBar />
      <PostContent />
      <PostBottomView/>
    </View>
  )
}

export default PostView

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    borderWidth:1,
    borderColor:'#cfc5c5',
    marginVertical:2,
    borderRadius:10,
    height:600
  }
})