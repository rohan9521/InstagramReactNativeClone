import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StoryView from './StoryView'

const Stories = () => {
    const [storyList, setStoryList] = useState([1,2,3,4,5])
    return (
        <View style={styles.container}>
            {
                storyList.map((story) => (
                    <StoryView id={story}/>
                ))
            }
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'black',
    }
})
