import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './features/home/HomeScreen';
import { ToastProvider } from 'react-native-toast-notifications'

export default function App() {
  return (
    <ToastProvider>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </ToastProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingTop:30,
    paddingBottom:5,
  },
})

