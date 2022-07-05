
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import MainNavigator from './Navigation';
import { Provider } from 'react-redux';
import store from './Store';
import {init} from './DB'


init()
.then(()=> {console.log('Db initialized');})
.catch((err)=> {
  console.log('Error loading db');
  console.log(err.message);
})

export default function App(){
    const [loaded] = useFonts({
       Saira:require( './assets/Saira_Semi_Condensed/SairaSemiCondensed-Light.ttf'),
      });
      
      if (!loaded) {
        return <ActivityIndicator/>;
      }
  
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={store}>
          <MainNavigator/>
          </Provider>
        </SafeAreaView>
      )
}