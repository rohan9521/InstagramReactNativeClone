import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'
import PostView from './PostView'

const Posts = (props) => {
  const [posts, setPosts] = useState  ([1, 2, 3, 4, 5])
  const renderItem = ({ item }) => (
    <PostView />
  );
  const renderGridItem = ({ item }) => (
    <PostView />
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.feed}
        data={posts}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({
  container: {
    flex: 14,
    width: '100%',
  },
  feed: {
    flex: 10
  }

})