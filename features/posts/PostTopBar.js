import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PostTopBar = () => {
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

export default PostTopBar

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:2
    },
    image: {
        width: 40,
        height: 40,
        overflow: 'hidden',
        borderRadius: 1000,
        marginLeft:2
    }

})