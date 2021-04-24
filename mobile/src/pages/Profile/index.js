import React,{useEffect,useState} from 'react';
import { Text, View, Image,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import { Divider } from 'react-native-paper';
import api from '../../services'
import styles from './styles'

import Card from '../../components/Card'
function Profile({navigation}) {
    const [userData, setUserData] = useState({})
    const loadUser = async ()=>{
        const id = await AsyncStorage.getItem('@Workers:id')

        setUserData( await (await api.get('/user/'+id)).data)
        console.log('adfsqui',userData);
    }
    console.log('adfsqui', userData);

    useEffect(()=>{
        loadUser()
    },[])
    return (
        <View style={styles.container}>
            <Image style={styles.cover} source={{uri:"https://th.bing.com/th/id/Ra777b9637ec86de597e3902d769ffdfc?rik=dkr1V6do%2bnezUg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f2%2f1173099-best-developer-wallpaper-hd-1920x1280-htc.jpg&ehk=cpS0yc7f%2f1d6Iv%2bBt0DPh0lhj%2fUcJy3FTDvcU927IPc%3d&risl=&pid=ImgRaw"}}/>
            <ScrollView>

            <View style={styles.AboutArea}>
                    <Text style={styles.title}>
                        {userData.name}
                        </Text> 
                    <Text style={styles.subtitle}>
                        Magé, Rio de Janeiro
                    </Text> 
                    <Text style={styles.describe}>
                   
                        {userData.about}
                    </Text> 
            </View>
            <View style={styles.contentProfile}>
                <Divider/>
                <Text style={styles.title}>
                works
                </Text> 
                <ScrollView style={styles.content} horizontal={false} >
                    {
                     userData.works?.map(work=>{
                         console.log('Wooorkk------',work);
                        return(
                            <Card title={work.title} describe={work.describe} image={work.image} key={work.id}/>
                        )

                     })
                    }
                   
                </ScrollView>
            </View>
            </ScrollView>
        </View>
    );
}

export default Profile;