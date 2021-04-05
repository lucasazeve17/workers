import React,{useState, useContext} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import api from '../../services'
import AuthContext from '../../contexts/Auth'


  
function Login({navigation}) {
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [errors,setErrors] = useState('')
    const { signed,sigIn } = useContext(AuthContext)
    console.log(signed);

    const resetFields = ()=>{
        setEmailInput('')
        setPasswordInput('')
        setErrors('')
    }

    const handleSubmit = async ()=>{
        await sigIn(emailInput,passwordInput,errors)
        if(errors) setErrors(errors)
        resetFields()

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