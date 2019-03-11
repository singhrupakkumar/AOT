import React, {Component} from 'react';
import {
  Dimensions,
   StyleSheet,
   Text,
   View,
   StatusBar ,
   TouchableOpacity,
   Image,
   ImageBackground,
   Alert,
   TextInput,
   Input
 } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;


export default class Settings extends Component{     
   
  state = {
    email: '',
    password: ''
 }
  handlePress = async () => {

    alert(this.state.password)
    fetch('http://104.248.120.98:3000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':'gjarogtvhyzbtfjymwfvhyqnrowtekdoboqkedvperrwbprift'
        },
        body: JSON.stringify({
            "email": 'dreamsanimationdev2@gmail.com',
            "password": 'future@123',
          }),
        })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson.userdata.first_name);
        Actions.usernavigation()
      })
      .catch((error) => {
        console.error(error);
      });
  }



render() {
return (

  <View style={styles.container}>
  <StatusBar
   barStyle="light-content" backgroundColor="transparent" translucent={true}
 />

      <View style={styles.lcontainer}>
  
      <TouchableOpacity 
onPress={() => {this.props.navigation.toggleDrawer() }}
    >
      <Text>
      click me</Text>
       </TouchableOpacity>
    </View>

</View>	
);
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
  gradbg:{
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
  forgotText:{
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
    alignSelf:'center',
    marginTop: 20,
  },
  lcontainer : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
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
  icnouter: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputicn: {
    width: 25,
    height: 25,
  },
  socialicn:{
    width: 25,
    height: 25,
    marginLeft: 8,
    marginRight: 8,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 65,
    marginBottom: 10,
  },
  signupbtn:{
    width:250,
    backgroundColor:'#fff',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  signupText:{
    color:'#f0f',
  }
 });