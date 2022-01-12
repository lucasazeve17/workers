import React,{useState,useEffect} from 'react';
import { Text, View, FlatList,} from 'react-native';
import api from '../../services'

import styles from './styles'
import SearchBar  from '../../components/SearchBar'
import Card  from '../../components/Card'

function Home({navigation,route}) {
    const [works,setWorks] = useState([])
    const [search,setSearch] = useState('')
    const [total,setTotal] = useState(0)
    const [offset,setOffset] = useState(0)
    const [loading,setLoading] = useState(false)
    const [filtro,setFiltro] = useState([])
    let refetch = route.params?.refetch
    let workCreated = route.params?.workCreated
    const loadWorks = async ()=> {
        if(loading){
           return
        }
        
        if(total > 0 && works.length === total && !workCreated){
        return
       }

       setLoading(true)
       const response = await api.get('/work',{
           params:{offset}
       })

       setWorks([...works,...response.data])
       setTotal(Number(response.headers["x-total-count"]))
       setOffset(works.length+response.data.length)
       setLoading(false)
       refetch=undefined
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
    
    },[!!refetch])
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
                    renderItem={({item})=>    <Card item={item} navigation={navigation} />}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadWorks}
                    onEndReachedThreshold={0.2}
                    />
            </View>
    );
}

export default Home;