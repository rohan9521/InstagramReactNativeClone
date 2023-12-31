import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import CommentBar from '../comment/CommentBar';

const PostBottomView = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.left}>
          <Icon style={styles.icon} name="heart" size={25} color="#080808" />
          <Icon style={styles.icon} name="comment" size={25} color="#080808" />
          <Icon style={styles.icon} name="send" size={25} color="#080808" />
        </View>
        <Icon style={styles.icon} name="save" size={25} color="#080808" />
      </View>
      <CommentBar/>
    </View>

  )
}

export default PostBottomView

const styles = StyleSheet.create({
  innerContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 5
  },
  outerContainer:{
    flex:6,
    flexDirection:'column'
  }
})