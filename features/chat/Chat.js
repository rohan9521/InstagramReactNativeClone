import { StyleSheet, View } from 'react-native'
import React from 'react'
import ChatList from '../chat/chatlist/ChatList'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatRoom from './chatRoom/ChatRoom';
import Requests from './Requests';
const Chat = () => {
  const Stack = createNativeStackNavigator()
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName='chatList' >
        <Stack.Screen name='chatList' component={ChatList} options={{ headerShown: false }} />
        <Stack.Screen name='chatRoom' component={ChatRoom} options={{ headerShown: false }} />
        <Stack.Screen name='requests' component={Requests} options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})