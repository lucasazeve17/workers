import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

  
function Login({navigation}) {
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')

    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Workers
            </Text> 
                <View style={styles.form}>
                    <View  style={styles.content}>
                        <Text style={styles.inputsLabel}>E-mail</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder="E-mail" disableFullscreenUI={true}
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
                            onPress={()=> navigation.navigate('Home')}
                        >
                            <Text style={styles.btnLabelSignIn}>
                                Entrar 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSignUp}>
                            <Text style={styles.btnSignUpLabel}> 
                                Cadastrar 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );

}

export default Login;