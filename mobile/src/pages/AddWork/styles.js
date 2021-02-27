import React from 'react';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    // paddingTop:32
  },
  content: {
    padding:16
  },
  inputs:{
    borderWidth:0.5,
    padding:16,
    borderRadius:10,
    borderColor:'#D9D0E3',
    marginBottom:30
  },
  inputsGroup:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  inputTypePrice:{
    borderWidth:0.5,
    width:150,
    padding:16,
    borderRadius:10,
    borderColor:'#D9D0E3',
    marginBottom:30
  },
  inputPrice:{
    borderWidth:0.5,
    width:150,
    padding:16,
    borderRadius:10,
    borderColor:'#D9D0E3',
    marginBottom:30
  },
  inputsLabel:{
    marginBottom:16,
    fontWeight:'bold',
    fontSize:16
  },
  describe:{
    borderWidth:0.5,
    borderColor:'#D9D0E3',
    padding:16
  },
  cardButton:{
    backgroundColor:"#2D0C57",
    alignItems:"center",
    justifyContent:"center",
    height:208
  },
  btnSaveWork:{
    backgroundColor:'#0BCE83',
    padding:16,
    marginTop:'15%',
    justifyContent:'flex-end',
    borderRadius:10,
  },
  btnLabelSaveWork:{
      textAlign:'center',
      color:'#fff',
      fontSize:24,
      fontWeight:'bold'
  },
});
