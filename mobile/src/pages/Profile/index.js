import React,{useEffect} from 'react';
import { Text, View, Image,ScrollView,AsyncStorage} from 'react-native';
import { Divider } from 'react-native-paper';
import api from '../../services'
import styles from './styles'

import Card from '../../components/Card'
function Profile({navigation}) {
    const user = async ()=>{
        const idx = await AsyncStorage.getItem('userId')
        idx = Number(idx)
        console.log('ii',idx);
        idx = Number(idx)
        const userDados = await api.get('/user/1')
          console.log('adfsqui',userDados);
    }
    useEffect(()=>{
        user()
    })
    return (
        <View style={styles.container}>
            <Image style={styles.cover} source={{uri:"https://th.bing.com/th/id/Ra777b9637ec86de597e3902d769ffdfc?rik=dkr1V6do%2bnezUg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f2%2f1173099-best-developer-wallpaper-hd-1920x1280-htc.jpg&ehk=cpS0yc7f%2f1d6Iv%2bBt0DPh0lhj%2fUcJy3FTDvcU927IPc%3d&risl=&pid=ImgRaw"}}/>
            <View style={styles.content}>

                <Text style={styles.title}>
                    Lucas Azevedo
                    </Text> 
                <Text style={styles.subtitle}>
                    Magé, Rio de Janeiro
                    </Text> 
                <Text style={styles.describe}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit justo quis velit molestie, id sodales dolor finibus. Integer sagittis, diam nec placerat egestas, nisl velit aliquam eros, quis consequat ante orci aliquam diam. Nam placerat eu magna.
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