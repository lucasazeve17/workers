import React from 'react';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:48,
  },
  AboutArea:{
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor: '#F6F5F5',

    padding:16
  },
  cover:{
    margin:-20,
    height:'35%',
  },
  contentProfile:{
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: '#F6F5F5',
    padding:16,
    
    // height:'100%'
  },
  title:{
    color:'#2D0C57',
    fontSize:30,
    fontFamily:'Righteous_400Regular',
    textAlign:'left',
    marginTop:24,
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
  btnFavorite:{
    backgroundColor:'#fff',
    borderWidth:0.5,
    borderColor:'#9586A8',
    padding:16,
    marginTop:'15%',
    justifyContent:'flex-end',
    borderRadius:10,
  },
  btnSignIn:{
    backgroundColor:'#0BCE83',
    padding:16,
    width:'70%',
    marginTop:'15%',
    justifyContent:'flex-end',
    borderRadius:10,
  },
  btnLabelSignIn:{
    textAlign:'center',
    color:'#fff',
    fontSize:24,
    fontWeight:'bold'
},
buttonArea:{
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row'
}
});
