import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Profile({navigation}) {
    return (
        <View>
           <Text>
               Hello Profile
            </Text> 
            <Button
                title="Home"
                onPress={()=> navigation.navigate('Home')}
            />
        </View>
    );
}

export default Profile;