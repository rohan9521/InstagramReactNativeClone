import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './features/home/HomeScreen';
import { ToastProvider } from 'react-native-toast-notifications'
import Profile from './features/profile/Profile';
import Login from './features/login/Login';
import SignUp from './features/signup/SignUp';
import DashBoard from './features/home/DashBoard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from './features/posts/Posts';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <ToastProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='dashboard'>
          <Stack.Screen name="dashboard"
            options={{
              headerShown: false
            }} component={DashBoard} />
       
          <Stack.Screen name="Auth" component={SignUp} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  }
})

