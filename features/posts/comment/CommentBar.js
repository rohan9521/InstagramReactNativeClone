import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CommentBar = () => {
    return (
        <View style={styles.container}>
            <View >
                <Text>LikedBy</Text>
            </View>
            <View >
                <Text>Comments</Text>
            </View>
            <View >
                <Text>HashTags</Text>
            </View>
            <View >
                <Text>View All Comments</Text>
            </View>
            <View >
                <Text>TimeAgo</Text>
            </View>
        </View>
    )
}

export default CommentBar

const styles = StyleSheet.create({
    container: {
        flex: 10,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#a8a8a8',
        borderRadius: 5,
        padding:5,
        justifyContent:'center'
    }
})