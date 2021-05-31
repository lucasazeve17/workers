import React from 'react';
import {View, Text, TouchableOpacity,Image,Button} from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';



// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCard = ({
    item,
    navigation
}) => (
  <View style={styles.card} >
    {/* <Card.Cover style={styles.cover} source={{ uri: cover }} /> */}
    <Image source={{uri:item?.image}} style={styles.cover}/>
    <View style={styles.content}>
      <Text  style={styles.title}>{item?.title}</Text>
      <Text style={styles.price} >R$50/H</Text>
      <Text style={styles.describe} numberOfLines={2} >
      {item?.describe}
      </Text>
      <View style={styles.btnGroup}>
        <TouchableOpacity  style={styles.btnFavorite}>
          <Ionicons name={'heart-outline'} size={18} color="red" />
        </TouchableOpacity> 
        <TouchableOpacity  style={styles.btnDetails} onPress={()=> navigation.navigate('Work',{id:item.id})}>
          <Ionicons name={'md-information-circle-outline'} size={18} color="white" />
        </TouchableOpacity> 
      </View>
    </View>
  </View>
);
  
  export default MyCard;