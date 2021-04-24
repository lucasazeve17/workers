import React,{useContext} from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity} from 'react-native';
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';

// import AuthContext from '../../contexts/Auth'


function Work({navigation}) {
    // const {signOut} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Image style={styles.cover} source={{uri:"https://th.bing.com/th/id/Ra777b9637ec86de597e3902d769ffdfc?rik=dkr1V6do%2bnezUg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f2%2f1173099-best-developer-wallpaper-hd-1920x1280-htc.jpg&ehk=cpS0yc7f%2f1d6Iv%2bBt0DPh0lhj%2fUcJy3FTDvcU927IPc%3d&risl=&pid=ImgRaw"}}/>
            <View style={styles.AboutArea}>
                    <Text style={styles.title}>
                        Amaro encanador
                        </Text> 
                    <Text style={styles.subtitle}>
                        50 R$/hr
                    </Text> 
                    <Text style={styles.subtitle}>
                        Describe
                    </Text> 
                    <Text style={styles.describe}>
                        Et aliquip nostrud fugiat duis ullamco incididunt nisi laborum cupidatat anim enim dolor laborum cillum.
                        Et aliquip nostrud fugiat duis ullamco incididunt nisi laborum cupidatat anim enim dolor laborum cillum.
                        Et aliquip nostrud fugiat duis ullamco incididunt nisi laborum cupidatat anim enim dolor laborum cillum.
                        Et aliquip nostrud fugiat duis ullamco incididunt nisi laborum cupidatat anim enim dolor laborum cillum.
                        Et aliquip nostrud fugiat duis ullamco incididunt nisi laborum cupidatat anim enim dolor laborum cillum.
                    </Text> 
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.btnFavorite}>
                                <Ionicons name={'heart-outline'} size={32} color="#9586A8" />
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

