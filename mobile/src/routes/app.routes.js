import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Tabs from './src/components/TabNavigator'


const AppStack = createStackNavigator()

const AppRoutes = ()=>(
    <AppStack.Navigator>
        <AppStack.Screen 
        name='Home' 
        component={Tabs} 
        options={{headerShown:false}} 
        />
    </AppStack.Navigator>
)

export default AppRoutes;