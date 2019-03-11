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
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;


export default class CompanyDetails extends Component {
  static navigationOptions = {
    headerBackground: (
      <ImageBackground
        style={{
          height: imageHeight,
          width: imageWidth
        }}
        source={require('../assets/images/header.png')}
      >
      </ImageBackground>
    ),

    headerLeft: null,
    headerTitle: 'Company Details',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flexGrow: 1,
      color: '#fff',
      marginTop: 80,
    },
  };


  state = {
    email: '',
    password: ''
  }
  handlePress = async () => {

    Alert.alert(
      '',
      'Saved successfully',
      [{ text: 'OK' }],
      { cancelable: false }
    ); 

    // alert(this.state.password)
    // fetch('http://104.248.120.98:3000/api/v1/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-access-token': 'gjarogtvhyzbtfjymwfvhyqnrowtekdoboqkedvperrwbprift'
    //   },
    //   body: JSON.stringify({
    //     "email": 'dreamsanimationdev2@gmail.com',
    //     "password": 'future@123',
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     Alert.alert(responseJson.userdata.first_name);
    //     Actions.usernavigation()
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }



  render() {

    return (

      <View style={styles.container}>
        <StatusBar
          barStyle="light-content" backgroundColor="transparent" translucent={true}
        />
        <ScrollView style={styles.container}>
          <View style={styles.container1}>
          <View style={styles.inputouter}>
                <Text style={styles.label}>Company Name</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Enter Company Name"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(companyname) => this.setState({ companyname })}
                  value={this.state.companyname} />
              </View>

              <View style={styles.inputouter}>
                <Text style={styles.label}>Company Description</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Enter company Description"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(description) => this.setState({ description })}
                  value={this.state.description} />
              </View>

              <View style={styles.inputouter}>
                <Text style={styles.label}>Brand Name</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Enter your Brand Name"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(brand) => this.setState({ brand })}
                  value={this.state.brand}
                />
              </View>



              <View style={styles.inputouter}>
                <Text style={styles.label}>Company Number</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Enter Company Number"
                  placeholderTextColor="#D3D3D3"
                  keyboardType="phone-pad"
                  dataDetectorTypes="phoneNumber"
                  maxLength={10}
                  onChangeText={(phone) => this.setState({ phone })}
                  value={this.state.phone}
                />
              </View>
      
              <View style={styles.inputouter}>
                <Text style={styles.label}>VAT Number</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Enter Vat Number"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(vat_number) => this.setState({ vat_number })}
                  value={this.state.vat_number} />
              </View>

               <View style={styles.inputouter}>
                <Text style={styles.label}>Hiring Capacity</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Hiring Capacity"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(capacity) => this.setState({ capacity })}
                  value={this.state.capacity} /> 
              </View> 


         
            <TouchableOpacity onPress={this.handlePress.bind(this)}> 
                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                  <Text style={styles.buttonText}>Save</Text>
                </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%'
  },
  container1: {
    padding: 18,
    paddingTop: 90,
  },
  imgsec: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 44,
  },
  imgwrapper: {
    width: 104,
    height: 98,
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(138, 0, 200, 0.15)'
  },
  imgout: {
    width: 104,
    height: 98,
    position: 'relative',

  },
  camerabtn: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    height: 20,
    width: 20
  },
  inputouter: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  inputBox: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    width: width - 175,
    fontSize: 12,
    color:'#747474', 
  },
  label: {
    width: 140,
    fontSize: 13,
    color: '#747474',
  },
  inputsec: {
    paddingBottom: 10,
    borderColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  maintxt: { 
    fontSize: 15,
    fontWeight: '500',
    color: '#747474'
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
    marginTop: 10,
  },
});