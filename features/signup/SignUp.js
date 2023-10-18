import { View, Text, Image, Button, Platform ,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomInput from '../../components/CustomInput';
import React from 'react'
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import { useState } from 'react';


const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [profileImage, setProfileImage] = useState(null)

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
          }
      }
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                resizeMethod='resize'
                resizeMode='stretch'
                source={{ uri: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/instagram-users-irked-with-the-new-update-sixteen_nine.jpg?size=1200:675' }}
            />
            <View style={styles.inputContainer}>
              
                <CustomInput text={userName} setText={setUserName} placeholder='UserName' />
                <CustomInput text={password} setText={setPassword} placeholder='Password' />
                <CustomInput text={email} setText={setEmail} placeholder='Email' />
                <CustomButton title='Upload Profile Picture' style={styles.loginButton} pressHandler={handleChoosePhoto} />
                <CustomButton title='Sign Up' style={styles.signupbutton}  />
                {loading &&<Progress.CircleSnail color={['red', 'green', 'blue']} />}
          
            </View>
            <View style={styles.loginHelpContainer}>
            <Text>Already have an Account ? Login</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 10,
        margin: 30,
     
    },
    signupbutton: {
        borderRadius: 4,
        elevation: 3,
        width: 100,
        height: 100,
        backgroundColor: 'black',
    },
    imageStyle: {
        flex: 2,
  
        height: '40%',
        width: '90%'
    },
    inputContainer: {
        flex: 2,
        width: '100%',
        borderTopColor:'black',
        borderTopWidth:1,
        borderBottomColor:'black',
        borderBottomWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginHelpContainer: {
        flex: 1,
        width: '100%',
       
        alignItems: 'center',
    },
    horizontalLine: {
        backgroundColor: 'black',
        width: '90%',
        height: 1,
        marginVertical:20,
    }
});
export default SignUp