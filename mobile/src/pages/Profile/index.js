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
            <View style={styles.coverArea}>
                <Image style={styles.cover} source={{uri:"https://th.bing.com/th/id/Ra777b9637ec86de597e3902d769ffdfc?rik=dkr1V6do%2bnezUg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f2%2f1173099-best-developer-wallpaper-hd-1920x1280-htc.jpg&ehk=cpS0yc7f%2f1d6Iv%2bBt0DPh0lhj%2fUcJy3FTDvcU927IPc%3d&risl=&pid=ImgRaw"}}/>
            </View>
            <View style={styles.content}>

                <Text style={styles.title}>
                    {userData.name}
                    </Text> 
                <Text style={styles.subtitle}>
                    Magé, Rio de Janeiro
                    </Text> 
                <Text style={styles.describe}>
                    {userData.about}
                </Text> 
                <Divider/>
                <Text style={styles.title}>
                works
                </Text> 
                <ScrollView style={styles.content} horizontal={true} >
                    <Card title="zé das couve" describe=", consectetur adipiscing elit. Aliquam blandit justo quis velit molestie, id sodales dolor finibus. Integer sagittis, diam nec placerat egestas, nisl velit aliquam eros, quis consequat ante" image="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1502/wavebreakmediamicro150201483/36345407-warehouse-worker-smiling-at-camera-carrying-a-box-in-a-large-warehouse.jpg"  />
                    <Card title="zé das couve" describe=", consectetur adipiscing elit. Aliquam blandit justo quis velit molestie, id sodales dolor finibus. Integer sagittis, diam nec placerat egestas, nisl velit aliquam eros, quis consequat ante" image="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1502/wavebreakmediamicro150201483/36345407-warehouse-worker-smiling-at-camera-carrying-a-box-in-a-large-warehouse.jpg" />
                    <Card title="zé das couve" describe=", consectetur adipiscing elit. Aliquam blandit justo quis velit molestie, id sodales dolor finibus. Integer sagittis, diam nec placerat egestas, nisl velit aliquam eros, quis consequat ante" image="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1502/wavebreakmediamicro150201483/36345407-warehouse-worker-smiling-at-camera-carrying-a-box-in-a-large-warehouse.jpg" />
                </ScrollView>
            </View>
        </View>
    );
}

export default Profile;