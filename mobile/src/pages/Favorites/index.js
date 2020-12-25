import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

function Favorites({navigation}) {
    return (
        <View>
           <Text>
               Favorites
            </Text> 
               <Button
                title="Tela de home"
                onPress={()=> navigation.navigate('Home')}
               />
        </View>
    );
}

export default Favorites;