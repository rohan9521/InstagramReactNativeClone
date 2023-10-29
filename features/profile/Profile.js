import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../home/HomeScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
const Profile = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.profileTopBar}>
        <Icon name='search'/>
        <View style={{
          flex:1,
          flexDirection:'row'
        }}>
          <Text>rohan.tkd</Text>
          <Icon name=''/>
        </View>
      </View>
      <View style={styles.userInfo}>
        <View  style={styles.userImageView}>
          <Image style={styles.userImage} />
          <Text>Rohan.tkd</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Rohan.tkd</Text>
          <Button title='Edit Profile' />
        </View>
      </View>
      <View style={styles.profileDetails}>
        <View>
          <Text>22</Text>
          <Text>Post</Text>
        </View>
        <View>
          <Text>22</Text>
          <Text>Post</Text>
        </View>
        <View>
          <Text>22</Text>
          <Text>Post</Text>
        </View>
      </View>
      <View style={styles.profileContent}>
        <Tab.Navigator>
          <Tab.Screen name="postsGrid" component={HomeScreen} />
          <Tab.Screen name="postsStack" component={HomeScreen} />
          <Tab.Screen name="save" component={HomeScreen} />
          <Tab.Screen name="tag" component={HomeScreen} />
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
    width:'100%',
    justifyContent:'flex-start',
    borderWidth:1,
    borderColor:'black'
  },
  profileDetails: {
    flex: 1,
    flexDirection: 'row',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'space-evenly'
  },
  profileContent: {
    flex: 8
  },
  userImageView:{
    flex:1
  },userImage:{
    height:60,
    width:60,
    borderWidth:1,
    borderColor:'black',
    borderRadius:1000,
    margin:10
  },
  userDetails:{
    width:'60%',
    flex:2,
  },
  profileTopBar:{
    flex:1,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-evenly'
  }
})