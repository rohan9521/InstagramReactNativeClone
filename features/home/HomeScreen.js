import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomBar from './BottomBar'
import Stories from '../stories/Stories'
import TopBar from './TopBar'
import { useState } from 'react'
import PostView from '../posts/PostView'

const HomeScreen = () => {
    const [posts, setPosts] = useState([1, 2])
    return (
        <View style={styles.container}>
            <TopBar style={styles.topBar} />
            <Stories />
            <View style={styles.feed}>
                {
                    posts.map((posts) => (

                        <PostView />

                    ))
                }
            </View>
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