import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Login from  '../pages/Login,'
import Register from  '../pages/Register'

const AuthStack = createStackNavigator()
console.log('type', typeof AuthStack);
const AuthRoutes = ()=>(
    <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen 
            name='Register' 
            component={ Register }
            options={{ headerShown:false }}
        />
        <AuthStack.Screen 
            name='Login' 
            component={Login}
            options={{ headerShown:false }}
        />
    </AuthStack.Navigator>
)

export default AuthRoutes;