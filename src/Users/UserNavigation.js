import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  TextInput,
  Input
} from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import {
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import EditProfile from './EditProfile';
import Profile from './Profile';
import Settings from './Settings';
import Drawerstack from '../Pages/Drawerstack';
import Sidemenu from '../Pages/Sidemenu';


const MyDrawerNavigator = createDrawerNavigator({
  Drawerstack: {
    screen: Drawerstack,
  },
},
  {
    initialRouteName: 'Drawerstack',
    contentComponent: Sidemenu,
    drawerWidth: imageWidth,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    useNativeAnimations: 'true',
    drawerBackgroundColor: 'transparent',
  });

const ProfileApp = createAppContainer(MyDrawerNavigator);

export default class UserNavigation extends Component {
  
  render() {
    return (
      <ProfileApp />
    )
  }
}



const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    width: 200
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 18,
  },
  gradbg: {
    height: imageHeight,
    width: imageWidth
  },
  h2: {
    color: '#003333',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 25
  },
  p: {
    color: '#747474',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 16,
  },
  forgotText: {
    color: '#AC00BB',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 15
  },
  dontacc: {
    color: '#747474',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  btn: {
    width: 200,
    height: 37,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  inputouter: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    marginBottom: 16,
  },
  inputBox: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    paddingLeft: 50,
    width: '100%',
    borderRadius: 5,
  },

});