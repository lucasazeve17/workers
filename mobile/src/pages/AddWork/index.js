import React,{useState} from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles.js'
import api from '../../services/'


function AddWork({navigation}) {
    const [titleInput, setTitleInput] = useState('')
    const [describeInput, setDescribeInput] = useState('')
    const [priceInput, setPriceInput] = useState('')
    async function handleCreateWork(){
        const data = {
            title:titleInput,
            price:priceInput, 
            describe:describeInput,
        }

       api.post('/work/create/',data).then((response)=>{
           console.log('funcionou ', response.data)
           navigation.navigate("Home",{refetch:true,workCreated:true})
        }
       ).catch((err)=>{
        //    if(err) setErrors('erro')
           console.log("deu ruim 2 ", err)
        })
        
    }
    return (
        <KeyboardAvoidingView 
            behavior='position'
            style={styles.container}
        >
            <View style={styles.cardButton}>
                <Ionicons name={'add-circle-outline'} size={42} color="#CBF265" />
            </View>
            <View style={styles.content}>
                <Text style={styles.inputsLabel}>Título</Text>
                <TextInput 
                    style={styles.inputs} 
                    placeholder="Ex: Programador back-end" 
                    value={titleInput}
                    onChangeText={(e)=> setTitleInput(e)}
                />
                <View style={styles.inputsGroup}>
                    <View>
                        <Text style={styles.inputsLabel}>Preço</Text>
                        <TextInput 
                            style={styles.inputPrice} 
                            placeholder="R$/hr" 
                            value={priceInput}
                            onChangeText={(e)=> setPriceInput(e)}
                        />
                    </View>
                </View>

                <Text style={styles.inputsLabel}>Descição</Text>
                <TextInput
                    style={styles.describe} multiline  
                    placeholder="Descrição" 
                    value={describeInput}
                    onChangeText={(e)=> setDescribeInput(e)}
                />

                <TouchableOpacity style={styles.btnSaveWork}>
                    <Text onPress={handleCreateWork} style={styles.btnLabelSaveWork} >
                        Salvar 
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default AddWork;