import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './features/login/Login';
import SignUp from './features/signup/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
  },
})

