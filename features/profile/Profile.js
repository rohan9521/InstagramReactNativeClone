import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../home/HomeScreen'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMagicWandSparkles'
import UserPostList from './UserPostList';
import Posts from '../posts/Posts';
const Profile = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.profileTopBar}>
        <FontAwesomeIcon icon={faMugSaucer} />
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Text>rohan.tkd</Text>
          <FontAwesomeIcon icon={faMugSaucer} />
        </View>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.userImageView}>
          <Image style={styles.userImage} />
          <Text>Rohan.tkd</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Rohan.tkd</Text>
          <Button title='Edit Profile' />
        </View>
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.profileDetailsItem}>
          <Text>22</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.profileDetailsItem}>
          <Text>22</Text>
          <Text>followers</Text>
        </View>
        <View style={styles.profileDetailsItem}>
          <Text>22</Text>
          <Text>following</Text>
        </View>
      </View>
      <View style={styles.profileContent}>
        <Tab.Navigator>
          <Tab.Screen name="postsGrid" children={() => <UserPostList />} />
          <Tab.Screen name="postsStack" component={Posts} />
          <Tab.Screen name="save" children={() => <UserPostList />} />
          <Tab.Screen name="tag" children={() => <UserPostList />} />
        </Tab.Navigator>
      </View>
    </View >
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 5
  },
  userInfo: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'black'
  },
  profileDetails: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b4abab',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  profileContent: {
    flex: 8
  },
  userImageView: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center'
  },
  userImage: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1000,
    margin: 10
  },
  userDetails: {
    width: '60%',
    flex: 2,
  },
  profileTopBar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  profileDetailsItem: {
    marginHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  }
})