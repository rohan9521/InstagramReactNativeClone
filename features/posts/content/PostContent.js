import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const PostContent = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://static.toiimg.com/thumb/msid-100267644,width-1280,resizemode-4/100267644.jpg"
                }}
            />
        </View>
    )
}

export default PostContent

const styles = StyleSheet.create({
    container: {
        flex:15,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#817d7d'
    },
    image: {
        height: '100%',
        width: '100%'
    }
})