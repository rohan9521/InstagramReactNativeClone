import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../profile/Profile';
import HomeScreen from './HomeScreen';
import Search from '../search/Search';
import Explore from '../explore/Explore'
import Icon from 'react-native-vector-icons/FontAwesome';
import Reels from '../reels/Reels';
import ChatList from '../chat/ChatList';
import Chat from '../chat/Chat';

const DashBoard = () => {
    const icons = {
        home: <Icon name="home" size={25} color="#080808" />,
        search: <Icon name="search" size={25} color="#080808" />,
        reels: <Icon name="camera" size={25} color="#08`0808" />,
        chat: <Icon name="send" size={25} color="#080808" />,
        profile: <Icon name="user" size={25} color="#080808" />
    }
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            initialRouteName='home'>
            <Tab.Screen
                name="home"
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarIcon: ({ tintColor }) => (
                        icons.home
                    ),
                })}
                component={HomeScreen} />
            <Tab.Screen
                name="search"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ tintColor }) => (
                        icons.search
                    )
                }}
                component={Search} />

            <Tab.Screen
                name="reels"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ tintColor }) => (
                        icons.reels
                    )
                }}
                component={Reels} />
            <Tab.Screen
                name="chat"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ tintColor }) => (
                        icons.chat
                    )
                }}
                component={Chat} />
            <Tab.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="user" size={25} color="#080808" />
                    )
                }}
                component={Profile} />
        </Tab.Navigator>
    )
}

export default DashBoard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingTop: 30,
        paddingBottom: 5,
    },
})