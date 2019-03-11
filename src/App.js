/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, AppRegistry,StyleSheet, Text, View,Image,ImageBackground,AsyncStorage} from 'react-native';

import Routes from './Routes.js'

export default class App extends Component {
 
  constructor() {
    super();
   
  }

  render() {  

    return (

   <Routes />  
 
    );
  }
}


