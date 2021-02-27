import React,{useState} from 'react';
import { Text, View, TextInput, TouchableOpacity,AsyncStorage } from 'react-native';
import styles from './styles'
import api from '../../services'


  
function Login({navigation}) {
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [errors,setErrors] = useState('')

    const resetFields = ()=>{
        setEmailInput('')
        setPasswordInput('')
        setErrors('')
    }

    const handleSubmit = async ()=>{


        const data = {
            email: emailInput ,
            password:passwordInput
        }
        
             api.post('auth',data).then( async (response)=>{
                await AsyncStorage.setItem('token', response.data.token)
                await AsyncStorage.setItem('userId',`${response.data.userId}`)
                resetFields()
                navigation.navigate("Home")
             }).catch((err)=>{
                 console.log('Aquiii o erroroo ',err);
                 setErrors('Email ou senha incorretos')
             })
     

    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Workers
            </Text> 
                <View style={styles.form}>
                    <View  style={styles.content}>
                        <Text style={styles.messageError}>{errors}</Text>

                        <Text style={styles.inputsLabel}>E-mail</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder="E-mail" 
                            autoCorrect={false}
                            value={emailInput}
                            onChangeText={(e)=> setEmailInput(e)}
                            
                        />
                       
                        <Text style={styles.inputsLabel}>
                            Senha
                        </Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder="Senha"
                            secureTextEntry={true}
                            value={passwordInput}
                            onChangeText={(e)=> setPasswordInput(e)}
                        />
                        
                        <TouchableOpacity
                            style={styles.btnSignIn}
                            onPress={()=>handleSubmit()}
                            >
                            <Text style={styles.btnLabelSignIn}>
                                Entrar 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSignUp}>
                            <Text 
                                style={styles.btnSignUpLabel}
                                onPress={()=>{
                                    resetFields()
                                    navigation.navigate('Register')
                                }}
                            > 
                                Cadastrar 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );

}

export default Login;