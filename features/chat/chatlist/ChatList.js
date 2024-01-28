import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import ChatListItem from './ChatListItem'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ChatRoom from '../chatRoom/ChatRoom';
import UserList from './UserList';
import CustomInput from '../../../components/CustomInput';
const ChatList = ({ navigation }) => {
  const [chatUserList, setChatUserList] = useState([1, 2, 4, 5, 6, 7, 10])


  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <FontAwesomeIcon name='arrow-left' size={20} />
        <FontAwesomeIcon name='edit' size={20} />
      </View>
      <View style={styles.search}>
        <CustomInput />
      </View>
      <View style={styles.horizontalBar}>
      </View>
      <View style={styles.messageRequestBar}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'blue' }}>Messages</Text>
        <Pressable style={{ padding: 10 }} onPress={() => { navigation.navigate('requests') }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Requests</Text>
        </Pressable>
      </View>

      <View style={styles.chatList}>
        <UserList navigation={navigation} userList={chatUserList} />
      </View>

    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    paddingTop: 25
  },
  chatList: {
    flex: 15
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  messageRequestBar: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  search: {
    flex: 1.2,
    flexDirection: 'row',
    marginBottom: 2
  },
  horizontalBar: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',

  }
})