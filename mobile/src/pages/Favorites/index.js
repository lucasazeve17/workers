import React,{useContext} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import AuthContext from '../../contexts/Auth'


function Favorites({navigation}) {
    const {signOut} = useContext(AuthContext)

    return (
        <View>
           <Text>
               Favorites
            </Text> 
               <Button
                title="Tela de home"
                onPress={()=> signOut() }
               />
        </View>
    );
}

export default Favorites;