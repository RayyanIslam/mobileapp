import { StyleSheet, Dimensions, Text, View, Button } from 'react-native';
import React,{Component} from 'react'

const styles = StyleSheet.create({
border: {
 width: Dimensions.get('window').width * 0.7,
 margin:20,
 padding: 20,
 borderWidth :1,
 borderColor: '#eb8900',
 backgroundColor: '#ededed',
 // backgroundColor: '#f00',

},

  container: {
    flex: 1,
    backgroundColor: '#4cc1c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor: '#ededed',
      alignItems: 'center',
      justifyContent: 'center',
    },

  stretch: {
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    flex: 1,
    alignItems: 'center',
  },

  fifty: {
  width:'80%',
  height:'30%',
  resizeMode:'cover',
  flex: 1,
  alignItems: 'center',
  }

});


export default styles;