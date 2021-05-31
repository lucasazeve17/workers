import React,{useContext} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import AuthContext from '../../contexts/Auth'


function Favorites({navigation}) {
    const {signOut} = useContext(AuthContext)

    return (
        <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',height:'100%'}}>
           <Text style={{fontSize:32}}>
               Em breve
            </Text> 
               <Button
                title="Tela de home"
                onPress={()=> signOut() }
               />
        </View>
    );
}

export default Favorites;