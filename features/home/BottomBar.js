import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useToast } from "react-native-toast-notifications";
const BottomBar = () => {
    const toast = useToast();
  let showSome = ()=>{
        toast.show("hi hello!!")
  }
  return (
    <View style={styles.container}>
      <Icon name="home" size={25} color="#080808" onPress={showSome}  />
      <Icon name="search" size={25} color="#080808" />
      <Icon name="camera" size={25} color="#08`0808" />
      <Icon name="heart" size={25} color="#080808" />
      <Icon name="user" size={25} color="#080808" />
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})