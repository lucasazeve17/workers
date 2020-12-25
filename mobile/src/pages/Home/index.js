import React,{useState,useEffect} from 'react';
import { Text, View, Button,FlatList,ScrollView} from 'react-native';
import api from '../../services'

import styles from './styles'
import SearchBar  from '../../components/SearchBar'
import Card  from '../../components/Card'

function Home({navigation}) {
    const [works,setWorks] = useState([])
   
    useEffect(() => {
        loadWorks()
    },[])
    
    async function loadWorks() {
        try {
            const res = await api.get('/')
            setWorks(res.data)
        } catch (error) {
            console.log(error)            
        }
    }
    console.log(works);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Workers</Text>
                <SearchBar style={styles.searchBar}/>
            </View>
            <ScrollView>
                <FlatList
                    data={works}
                    renderItem={({item})=>    <Card title={item.title} paragraph={item.describe} cover="https://images.pexels.com/photos/4627309/pexels-photo-4627309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>}
                    keyExtractor={item => item.id.toString()}
                    // showsVerticalScrollIndicator={false}
                    // onEndReached={loadWorks}
                    // onEndReachedThreshold={0.2}
                    />
            </ScrollView>
            </View>
    );
}

export default Home;