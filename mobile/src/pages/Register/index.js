import React,{useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import api from '../../services/'
import styles from './styles'

  
function Register({navigation}) {
    const [passwordInput, setPasswordInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [phoneNumberInput, setPhoneNumberInput] = useState('')
    const [confirmpasswordInput, setconfirmPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [errors,setErrors] = useState('')

    async function handleRegister(){
        const data = {
            name:nameInput,
            phoneNumber:phoneNumberInput, 
            email:emailInput,
            password:passwordInput,	
        }
        // try {
            // api.post('/user/register/',data)
            // if(request.status !== 200 ){
            //     return console.log("olha ",request.data)
            // }
            
        // } catch (error) {
        //     console.log("Erro aqui: ", error)
        // }

       api.post('/user/register/',data).then((response)=>{
           console.log('funcionou ', response.data)
           navigation.navigate("Login")
        }
       ).catch((err)=>{
           if(err) setErrors('erro')
           console.log("deu ruim 2 ", err)
        })
        
    }
    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Workers
            </Text> 
                <ScrollView style={styles.form}>
                    <View  style={styles.content}>

                        <Text style={styles.inputsLabel}>Nome</Text>
                        <TextInput 
                            style={styles.inputs}
                            autoCompleteType="name"
                            placeholder="Nome" 
                            textContentType="name"
                            value={nameInput}
                            onChangeText={(e)=> setNameInput(e)}
                        />

                        <Text style={styles.inputsLabel}>
                            E-mail
                        </Text>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="E-mail"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            value={emailInput}
                            onChangeText={(e)=> setEmailInput(e)}
                        />

                        <Text style={styles.inputsLabel}>
                            Telefone Celular (whatsapp)
                        </Text>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="Telefone celular"
                            textContentType="telephoneNumber"
                            keyboardType="number-pad"
                            value={phoneNumberInput}
                            onChangeText={(e)=> setPhoneNumberInput(e)}
                        />

                        <Text style={styles.inputsLabel}>
                            Senha
                        </Text>
                        <TextInput 
                            style={styles.inputs} 
                            placeholder="Senha"
                            textContentType="password"
                            secureTextEntry={true}
                            value={passwordInput}
                            onChangeText={(e)=> setPasswordInput(e)}
                            />

                        <Text style={styles.inputsLabel}>
                            Confirme a Senha
                        </Text>
                        <TextInput
                            style={styles.inputs} 
                            placeholder="Senha"
                            textContentType="password"
                            secureTextEntry={true}
                            value={confirmpasswordInput}
                            onChangeText={(e)=> setconfirmPasswordInput(e)}
                        />
                     
                        <TouchableOpacity style={styles.btnRegister}>
                            <Text 
                                onPress={()=>handleRegister()}
                                style={styles.btnLabelRegister}> 
                                Cadastrar 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </View>
    );

}

export default Register;