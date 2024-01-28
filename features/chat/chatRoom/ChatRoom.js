import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon6 from 'react-native-vector-icons/MaterialIcons';
import { TextField } from '@mui/material';
import CustomInput from '../../../components/CustomInput';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import ChatMessageView from './ChatMessageView';
const ChatRoom = ({ navigation }) => {
    const [chatMessageList,setChatMessageList] = useState([1,2,3])
    let renderItem = ({ item }) => {
        return <ChatMessageView/>
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.chatUserInfo}>
                    <Pressable onPress={navigation.goBack}>
                        <FontAwesomeIcon name='arrow-left' size={20} />
                    </Pressable>
                    <Image
                        style={styles.imageTop}
                        source={{
                            uri: "https://static.toiimg.com/thumb/msid-100267644,width-1280,resizemode-4/100267644.jpg"
                        }}
                    />
                    <View style={styles.userDetails}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Rohan</Text>
                        <Text>10 mins ago</Text>
                    </View>

                </View>
                <FontAwesomeIcon name='edit' size={20} />
            </View>
            <View style={styles.chatContainer}>
                <FlatList
                    renderItem={renderItem}
                    data={chatMessageList}
                     />
            </View>
            <View style={styles.sendMessage}>
                <CustomInput />
                <FontAwesomeIcon6 style={{ marginRight: 15 }} name='send' size={30} />
            </View>
        </View>
    )
}

export default ChatRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 25
    },
    topBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#c9c2c2',
        paddingHorizontal: 10
    },
    chatContainer: {
        flex: 12
    },
    sendMessage: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#c9c2c2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageTop: {
        width: 40,
        height: 40,
        overflow: 'hidden',
        borderRadius: 1000,
        marginLeft: 2
    },
    chatUserInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    userDetails: {
        paddingHorizontal: 10,

    }
})