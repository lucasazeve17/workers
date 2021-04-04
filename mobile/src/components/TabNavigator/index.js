import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()

import Home from '../../pages/Home'
import Profile from '../../pages/Profile';
import Favorites from '../../pages/Favorites';
import AddWork from '../../pages/AddWork';



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
export default Tabs
