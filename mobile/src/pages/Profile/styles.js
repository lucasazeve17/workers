import React from 'react';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:32,
  },
  cover:{
    width:'100%',
    height:300,
  },
  content:{
    backgroundColor: '#F6F5F5',
    marginTop:-16,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:16
  },
  title:{
    color:'#2D0C57',
    fontSize:30,
    fontFamily:'Righteous_400Regular',
    textAlign:'left',
    marginBottom:16,
  },
  subtitle:{
    color:'#2D0C57',
    fontSize:14,
    fontFamily:'Righteous_400Regular',
    textAlign:'left',
    marginBottom:32,
  },
  describe:{
    color:'#A1A1A1',
    fontSize:16,
    fontFamily:'Righteous_400Regular',
    textAlign:'justify',
    marginBottom:27,
  },
  searchBar:{
    borderRadius:100,
  }
});
