import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Posts from '../posts/Posts'
import PostContent from '../posts/content/PostContent'

const UserPostList = (props) => {
    const [posts, setPosts] = useState([1, 2, 3, 4, 5])
    const renderGridItem = ({ item }) => (
        <View  style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://static.toiimg.com/thumb/msid-100267644,width-1280,resizemode-4/100267644.jpg"
                }}
            />
        </View>

    )
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.postContentListStyle}
                data={posts}
                renderItem={renderGridItem}
                numColumns={3}
            />
        </View>
    )
}

export default UserPostList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    postContentListStyle: {
        flexDirection: 'column',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode:'stretch',
        borderWidth: 1,
        borderColor: 'black'
    },
    imageContainer:{
        height: 120,
        width: '33.3%',
      
    }
})