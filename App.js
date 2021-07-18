import { StatusBar } from 'expo-status-bar';
import Main from './components/MainComponent';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  data:{
    backgroundColor:'#ffff',
   
  }
});
