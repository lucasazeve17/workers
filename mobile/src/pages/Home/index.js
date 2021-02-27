import React,{useState,useEffect} from 'react';
import { Text, View, Button,FlatList,} from 'react-native';
import api from '../../services'

import styles from './styles'
import SearchBar  from '../../components/SearchBar'
import Card  from '../../components/Card'

function Home({navigation}) {
    const [works,setWorks] = useState([])
    const [search,setSearch] = useState('')
    const [total,setTotal] = useState(0)
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const [filtro,setFiltro] = useState([])
   
    const loadWorks = async ( )=> {
        console.log('entrou');
       if(loading){
           return
       }

       if(total > 0 && works.length === total){
        return
       }

       setLoading(true)
       const response = await api.get('/work',{
           params:{page}
       })
       setWorks([...works,...response.data])
       setTotal(response.headers["x-total-count"])
       setPage(page + 1)
       setLoading(false)
    }

    const handleSearch = (e)=>{
       setSearch(e)
        const filtro= works.filter(item=>{
            const title = item.title.toLowerCase()

           return title.includes(search.toLowerCase())
        })
        setFiltro(filtro)
    }


    useEffect(() => {
        loadWorks()
    },[])
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Workers</Text>
                <SearchBar 
                    style={styles.searchBar} 
                    value={search}
                    onChangeSearch={(e)=> handleSearch(e)}
                />
            </View>
         
                <FlatList
                    data={search.length <= 0 ? works : filtro }
                    renderItem={({item})=>    <Card title={item.title} describe={item.describe} image={item.image} />}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadWorks}
                    onEndReachedThreshold={0.2}
                    />
            </View>
    );
}

export default Home;