import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useToast } from "react-native-toast-notifications";
import { Image } from 'react-native';
const TopBar = () => {
  const toast = useToast();
  let showSome = () => {
    toast.show("hi hello!!")
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        resizeMethod='resize'
        resizeMode='stretch'
        source={{ uri: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/instagram-users-irked-with-the-new-update-sixteen_nine.jpg?size=1200:675' }}
      />
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderBottomWidth:1,
    borderBottomColor:'#e2d8d8',
    overflow:'hidden',

  },
  imageStyle: {
    height: 100,
    width: '50%',
    resizeMode: 'cover',
  
  }
})