import React from 'react';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
  card: {
    flex: 1,
    // backgroundColor: '#F6F5F5',
    // padding:8,
    marginBottom:16,
    flexDirection:'row',
  },
  content:{
    flexDirection:'row',
    // width:'100%',
  },
  title:{
      alignSelf:'flex-start',
  },
  describe:{
    color:'#000',
    // alignSelf:'flex-end',
    // width:80,
    // height:80
  },
  btnGroup:{
    backgroundColor:'#000'
  },
  cover:{
    width:140,
    height:140,
    borderRadius:8
  }
});
