import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://static.toiimg.com/thumb/msid-100267644,width-1280,resizemode-4/100267644.jpg"
          }}
        />
      </View>

      <View style={styles.userInfo}>
        <Text style={{fontWeight:'bold',fontSize:15}}>Rohan.tkd</Text>
        <Text>Hi</Text>
      </View>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor:'#9b9494',
    paddingTop:5
  }, image: {

    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 1000,
    marginLeft: 2
  },
  imageContainer: {
    flex: 1
  },
  userInfo: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    height:'100%',
    alignItems:'stretch',
  
  }
})