import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity} from 'react-native';
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';

import api from '../../services'


// import AuthContext from '../../contexts/Auth'


function Work({route}) {
    const [heart,setHeart] = useState('heart-outline')
    const [workData, setWorkData] = useState({})
    const loadWork = async ()=>{
        const id = route.params.id

        setWorkData( await (await api.get('/work/'+id)).data.work)
    }
    console.log('adfsqui', workData);

    useEffect(()=>{
        loadWork()
    },[])
    return (
        <View style={styles.container}>
            <Image style={styles.cover} source={{uri:workData.image}}/>
            <View style={styles.AboutArea}>
                    <Text style={styles.title}>
                        {workData.title}
                        </Text> 
                    <Text style={styles.subtitle}>
                        50 R$/hr
                    </Text> 
                    <Text style={styles.subtitle}>
                        Describe
                    </Text> 
                    <Text style={styles.describe}>
                       {workData.describe}


                    
                    </Text> 
                    <View style={styles.authorArea}>
                        <Ionicons name={'person-circle'} size={32} color="#9586A8" />
                        <Text>
                        Amaro da silva
                        </Text>
                    </View>

                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.btnFavorite}
                        onPress={()=>setHeart(heart == 'heart-outline'?'heart':'heart-outline')}>
                                <Ionicons name={heart} size={32} color="#9586A8" />
                        </TouchableOpacity>

                        <TouchableOpacity  style={styles.btnSignIn}>
                            <Text style={styles.btnLabelSignIn}>
                                Entre em contato 
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
}

export default Work;

