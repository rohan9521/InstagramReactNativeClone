import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import ChatListItem from './ChatListItem'

const UserList = ({ navigation, userList }) => {
  let handleOnPressChat = (chatUserId) => {
    navigation.navigate('chatRoom',messageList=[1,2,3])
  }
  let renderItem = ({ item }) => {
    return <Pressable onPress={() => { handleOnPressChat(item) }}>
      <ChatListItem />
    </Pressable>
  }
  return (
    <FlatList
      renderItem={renderItem}
      data={userList}
    />
  )
}

export default UserList