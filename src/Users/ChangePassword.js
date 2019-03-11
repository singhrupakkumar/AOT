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
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;


export default class ChangePassword extends Component {

  constructor() {
    super();
  }
  state = {
    email: '',
    password: ''
  }
  handlePress = async () => {

    this.setState({ apidata: 0 })
    this.setState({ apidata: 1 })
    Alert.alert(
      '',
      'Password change successfully',
      [{ text: 'OK' }],
      { cancelable: false }
    );
    Actions.login()
    //fetch('http://104.248.120.98:3000/api/v1/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-access-token':'gjarogtvhyzbtfjymwfvhyqnrowtekdoboqkedvperrwbprift'
    //   },
    //   body: JSON.stringify({
    //       "email": 'dreamsanimationdev2@gmail.com',
    //       "password": 'future@123',
    //     }),
    //   })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({apidata:1})
    //   Alert.alert(
    //     '',
    //     'Password reset successfully',
    //     [{text: 'OK'}],
    //     { cancelable: false }
    //   );
    //   Actions.login()
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }
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
    headerStyle: { height: 100, elevation: 0 },
  };

  render() {
    if (this.state.apidata == 0) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.container1}>
            <StatusBar
              barStyle="light-content" backgroundColor="transparent" translucent={true}
            />

            <View style={styles.lcontainer}>

              <Text style={styles.p}>Would you like to change your password?</Text>

              <View style={styles.inputouter}>
                <Text style={styles.label}>Old Password</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Enter your old Password"
                  secureTextEntry={true}
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(oldpassword) => this.setState({ oldpassword })}
                  value={this.state.oldpassword}
                />
              </View>

              <View style={styles.inputouter}>
                <Text style={styles.label}>New Password</Text>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Enter your new Password"
                  secureTextEntry={true}
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(newpassword) => this.setState({ newpassword })}
                  value={this.state.newpassword}
                />
              </View>

              <View style={styles.inputouter}>
                <Text style={styles.label}>Confirm Password</Text> 
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Confirm your Password"
                  secureTextEntry={true}
                  placeholderTextColor="#D3D3D3"
                  onChangeText={(cpassword) => this.setState({ cpassword })}
                  value={this.state.cpassword}
                />
              </View>
              <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </LinearGradient>



            </View>

          </View>
        </ScrollView>
      );
    }
  }
}


const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: 80
  },
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
    backgroundColor: '#fff',
  },
  container1: {
    padding: 18,
    paddingTop: 120,
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
  p: {
    color: '#747474',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 30
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
  lcontainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputouter: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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

});