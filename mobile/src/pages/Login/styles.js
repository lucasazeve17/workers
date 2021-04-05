import React from 'react';
import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D0C57',
    // alignItems: '',
  },
  title:{
    color:'#CBF265',
    fontFamily:'Righteous_400Regular',
    fontSize:64,
    textAlign:'center',
    paddingTop:102,
    paddingBottom:103,
  },
  form:{
    flex: 1,
    backgroundColor: '#fff',
    alignContent:'space-between',
    paddingHorizontal:16
  },
  content:{
    paddingTop:56
  },
  inputs:{
    borderWidth:0.5,
    padding:16,
    borderRadius:10,
    borderColor:'#D9D0E3',
    marginBottom:8
  },
  inputsLabel:{
    marginBottom:16,
    fontWeight:'bold',
    fontSize:16
  
  },
  btnSignIn:{
    backgroundColor:'#0BCE83',
    padding:16,
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
  btnSignUp:{
    backgroundColor:'#fff',
    borderWidth:0,
    padding:16,
    marginTop:16,
    justifyContent:'flex-end',
    borderRadius:10,
  },
  btnSignUpLabel:{
      textAlign:'center',
      color:'#2D0C57',
      fontSize:18,
      fontWeight:'bold'
  },
  messageError:{
    position:'absolute',
    color:'red',
    fontSize:16,
    marginTop:16
  }
});
