import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StoryView from './StoryView'

const Stories = () => {
    const [storyList, setStoryList] = useState([1, 2, 3, 4, 5,4,4,])
    const renderItem = (item) => (
        <StoryView />
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={storyList}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                
            />
               
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
    }
})
