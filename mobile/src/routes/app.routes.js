import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Tabs from '../components/TabNavigator'
import Work from '../pages/Work'

const AppStack = createStackNavigator()

const AppRoutes = ()=>(
    <AppStack.Navigator>
        <AppStack.Screen 
        name='Home' 
        component={Tabs} 
        options={{headerShown:false}} 
        />
        <AppStack.Screen 
        name='Work' 
        component={Work} 
        options={{headerShown:false}} 
        />
    </AppStack.Navigator>
)

export default AppRoutes;