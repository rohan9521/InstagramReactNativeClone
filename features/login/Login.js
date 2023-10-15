import { StyleSheet, Image, Text, View, Button } from 'react-native'
import { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import React from 'react'
import CustomButton from '../../components/CustomButton';

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                resizeMethod='resize'
                resizeMode='stretch'
                source={{ uri: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/instagram-users-irked-with-the-new-update-sixteen_nine.jpg?size=1200:675' }}
            />
            <View style={styles.inputContainer}>
                <View style={styles.horizontalLine} />
                <CustomInput text={userName} setText={setUserName} placeholder='UserName' />
                <CustomInput text={password} setText={setPassword} placeholder='Password' />
                <Text>Forgot Password</Text>
                <CustomButton title='Login' style={styles.loginButton} />
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.loginHelpContainer}>
            <Text>Dont have an account? Create Account</Text>
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
    loginButton: {
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
export default Login