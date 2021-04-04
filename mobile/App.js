import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Righteous_400Regular 
} from '@expo-google-fonts/righteous'


import Routes from './src/routes';




export default function App() {
  let [fontsLoaded] = useFonts({
      Righteous_400Regular
  }) 
  if (!fontsLoaded) {
      return <AppLoading />;
  }else{
    return (
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    );
  }
}

