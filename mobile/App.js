import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Righteous_400Regular 
} from '@expo-google-fonts/righteous'


import Home from './src/pages/Home'
import Login from './src/pages/Login,'
import Profile from './src/pages/Profile';
import Favorites from './src/pages/Favorites';
import AddWork from './src/pages/AddWork';
import Register from './src/pages/Register';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function  Tabs() {
  return(
    <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
      // showLabel: false ,
    }}
    screenOptions={({route})=>({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        color='#2D0C57'
        
        if (route.name === 'Home') {
          iconName = focused
          ? 'home'
          : 'home-outline';
        }
        if (route.name === 'Perfil') {
          iconName = focused
          ? 'person'
          : 'person-outline';
        }
        if (route.name === 'Favoritos') {
          iconName = focused
          ? 'heart'
          : 'heart-outline';
        }
        if (route.name === 'Add') {
          iconName = focused
          ? 'add-circle'
          : 'add-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      }
            
    })}
    >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Add' component={AddWork} />
          <Tab.Screen name='Favoritos' component={Favorites}  />
          <Tab.Screen name='Perfil' component={Profile} />
        </Tab.Navigator>

  )
}

export default function App() {
  let [fontsLoaded] = useFonts({
      Righteous_400Regular
  }) 
  if (!fontsLoaded) {
      return <AppLoading />;
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name='Register' 
            component={Register}
            options={{
              headerShown:false
              
            }}
            />
          <Stack.Screen 
            name='Login' 
            component={Login}
            options={{
              headerShown:false
              
            }}
            />
          <Stack.Screen 
            name='Home' 
            component={Tabs}
            options={{
              headerShown:false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

