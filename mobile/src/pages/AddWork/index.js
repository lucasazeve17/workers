import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

function AddWork({navigation}) {
    return (
        <View>
           <Text>
               AddWork
            </Text> 
               <Button
                title="Tela de home"
                onPress={()=> navigation.navigate('Home')}
               />
        </View>
    );
}

export default AddWork;