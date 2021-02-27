import React from 'react';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
  card: {
    flex: 1,
    height:160,
    // width:414,
    backgroundColor: '#F6F5F5',
    padding:0,
    marginBottom:32,
    borderWidth:0,
    flexDirection:"row"
  },
  content:{
    padding:0,
    marginLeft:16,
    borderWidth:0
    // flexDirection:'row',
    // width:'100%',
  },
  title:{
    flex:1,
    color:"#2D0C57",
    fontSize:18,
    fontWeight:'bold'
  },
  price:{
    flex:1,

    color:'#2D0C57',
  },
  describe:{
    flex:2,
    maxWidth:140,
    color:'#2D0C57',
  },
  btnGroup:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  btnFavorite:{
    backgroundColor:"#fff",
    marginRight:2,
    width:78,
    padding:16,
    borderWidth:0.5,
    borderColor:"#D9D0E3",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8

  },
  btnDetails:{
    backgroundColor:"#0BCE83",
    width:78,
    padding:16,
    borderWidth:0.5,
    borderColor:"#D9D0E3",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8

  },
  cover:{
    width:160,
    height:160,
    borderRadius:8
  }
});
