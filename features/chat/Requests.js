import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import UserList from './chatlist/UserList'

const Requests = ({ navigation }) => {
    const [userList, setUserList] = useState([1, 2, 3])
    return (
        <View style={styles.container}>
            <View style={styles.chatList}>
                <UserList navigation={navigation} userList={userList} />
            </View>
        </View>
    )
}

export default Requests

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20
    }
})