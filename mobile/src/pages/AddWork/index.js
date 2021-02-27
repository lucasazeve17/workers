import React from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles.js'

function AddWork({navigation}) {
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
                <TextInput style={styles.inputs} />
                <View style={styles.inputsGroup}>
                    <View>
                        <Text style={styles.inputsLabel}>Tipo do preço</Text>
                        <TextInput style={styles.inputTypePrice} />
                    </View>
                    <View>
                        <Text style={styles.inputsLabel}>Preço</Text>
                        <TextInput style={styles.inputPrice} />
                    </View>
                </View>

                <Text style={styles.inputsLabel}>Descição</Text>
                <TextInput style={styles.describe} multiline  />

                <TouchableOpacity style={styles.btnSaveWork}>
                    <Text style={styles.btnLabelSaveWork} >
                        Salvar 
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default AddWork;