import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../home/HomeScreen'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMagicWandSparkles'
import UserPostList from './UserPostList';
import Posts from '../posts/Posts';
import CustomButton from '../../components/CustomButton';
const Profile = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.profileTopBar}>
        <View ><FontAwesomeIcon name='cog' size={20} /></View>
        <View style={{
          flexDirection: 'row',

        }}>
          <Text >rohan.tkd</Text>
          <View><FontAwesomeIcon name='chevron-down' /></View>
        </View>
        <View ><FontAwesomeIcon name='user-plus' size={20} /></View>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.userImageView}>
          <Image
            style={styles.userImage}
            source={{
              uri: "https://static.toiimg.com/thumb/msid-100267644,width-1280,resizemode-4/100267644.jpg"
            }}
          />
          <Text>Rohan.tkd</Text>
        </View>
        <View style={styles.userDetails}>
          <Text style={{ marginHorizontal: 20 }}>Rohan.tkd</Text>
          <CustomButton title='Edit Profile' width={30} color={'#959990'} />
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
          <Tab.Screen name="postsGrid"
            options={
              {
                tabBarIcon: () => (<FontAwesomeIcon color='#3288cf' name='building-o' size={20} />),
                tabBarShowLabel: false
              }
            } children={() => <UserPostList />} />
          <Tab.Screen
            name="postsStack"
            component={Posts}
            options={
              {
                tabBarIcon: () => (<FontAwesomeIcon color='#3288cf' name='server' size={20} />),
                tabBarShowLabel: false
              }
            }
          />
          <Tab.Screen
            name="save"
            children={() => <UserPostList />}
            options={
              {
                tabBarIcon: () => (<FontAwesomeIcon name='save' color='#3288cf' size={20} />),
                tabBarShowLabel: false
              }
            }
          />
          <Tab.Screen
            name="tag"
            children={() => <UserPostList />}
            options={
              {
                tabBarIcon: () => (<FontAwesomeIcon name='tag' color='#3288cf ' size={20} />),
                tabBarShowLabel: false
              }
            }
          />
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
    flex: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileDetails: {
    flex: 2,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b4abab',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  profileContent: {
    flex: 15
  },
  userImageView: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  userImage: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1000,
    margin: 5
  },
  userDetails: {
    width: '60%',
    flex: 5,
    justifyContent: 'center'
  },
  profileTopBar: {
    flex: 1.5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b4abab'
  },
  profileDetailsItem: {
    marginHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  }
})