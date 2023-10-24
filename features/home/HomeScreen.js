import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomBar from './BottomBar'
import Stories from '../stories/Stories'
import TopBar from './TopBar'
import { useState } from 'react'
import PostView from '../posts/PostView'
import Posts from '../posts/Posts'

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <TopBar style={styles.topBar} />
            <Stories />
            <Posts />
            <BottomBar style={styles.bottomBar} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    stories: {

    },
    feed: {
        flex: 14,
        width: '100%',

    },
    bottomBar: {
        flex: 1,
        height: 30,
        width: '100%',
        borderWidth: 3,
        borderColor: 'black',
    },
    topBar: {
        flex: 5,
    }
})