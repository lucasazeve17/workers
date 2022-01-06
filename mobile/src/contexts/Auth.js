import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../services'

// const AuthContextData ={
//     signed:Boolean,
//     token:String,
//     user:String
// }

const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(false)

    useEffect(()=>{
        async function loadStorageData(){
           const storageToken = await AsyncStorage.getItem('@Workers:token')
           const storageId = await AsyncStorage.getItem('@Workers:id')

           if(storageToken && storageId){
                api.defaults.headers['Authorization'] = `Bearer ${storageToken}`
               setUser(true)
           }
        }

        loadStorageData()
    },[])

    async function sigIn(email, password, erros){
        const data = {
            email ,
            password
        }
        console.log(data);
        try {
            const response = await api.post('auth', data)

            setUser(true)

            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

            await AsyncStorage.setItem('@Workers:token',String(response.data.token))
            await AsyncStorage.setItem('@Workers:id',String(response.data.id))
            console.log('response: ',response.data);            
            
        } catch (error) {
            console.log('Aquiii o erroroo ',error);
            // setErrors('Email ou senha incorretos')
        }
    }
    async function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null)
        })
    }
 
    return (
        <AuthContext.Provider value={{ signed:!!user,  sigIn,signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext