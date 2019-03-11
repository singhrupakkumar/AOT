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
import HideView from '../Component/HideView';
import CodeInput from 'react-native-confirmation-code-input';
import Modal from "react-native-modal";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
  { label: 'Email', value: 0, borderBottomWidth: 1, },
  { label: 'Mobile Number', value: 1 },
];

export default class Forgot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      OtpModal: false,
      alertModal: false,
      disable: true,
      code: '',
    };

  }

  state = {
    email: '',
    mobile: ''
  }

  _onFulfill(code) {
    if (code == '12345') {
      this.setState({ disable: false })

    } else {
      Alert.alert(
        '',
        'OTP does not match!',
        [{ text: 'OK' }],
        { cancelable: false }
      );

      this.refs.codeInputRef1.clear();
    }
  }

  onConfirm() {

    Alert.alert(
      '',
      'Confirmed',
      [{ text: 'OK' }],
      { cancelable: false }
    );

    this.setState({ OtpModal: false })
    Actions.resetpassword()
  }
  handlePress = async () => {

    if (this.state.isHidden == false && this.state.email == undefined) {
      Alert.alert(
        '',
        'Email Address required',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return false;
    } else if (this.state.isHidden == true && this.state.mobile == undefined) {
      Alert.alert(
        '',
        'Mobile Number required',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return false;
    }
    this.setState({ apidata: 0 })  

    this.setState({ apidata: 1 })
    this.setState({ alertModal: true })
    // fetch('http://104.248.120.98:3000/api/v1/users/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-access-token':'gjarogtvhyzbtfjymwfvhyqnrowtekdoboqkedvperrwbprift'
    //     },
    //     body: JSON.stringify({
    //         "email": 'dreamsanimationdev2@gmail.com',
    //         "password": 'future@123',
    //       }),
    //     })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({apidata:1})
    //     this.setState({alertModal:true}) 

    //   //  Actions.resetpassword()
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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

    headerRight: (
      <View>
        <Text
          onPress={() => Actions.pop()}
          underlayColor={'#444444'}
          style={{ color: "#fff" }}
        >
        </Text>
      </View>
    ),

    headerLeft: (
      <View>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
        </TouchableOpacity>

      </View>
    ),
    headerStyle: { height: 100, elevation: 0 },
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flexGrow: 1,
      color: '#fff',
      marginTop: 23,
      fontSize: 15,
      fontWeight: '500'
    },
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
              <RadioForm
                style={{ display: 'flex', width: '100%' }}
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { this.setState({ isHidden: value }) }}
                buttonColor={'#A6A6A6'}
                selectedButtonColor={'#A500BD'}
                buttonSize={10}
                buttonOuterSize={25}
                borderRadius={5}
                buttonOuterRadius={2}
                radioStyle={{ paddingVertical: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
                labelStyle={{
                  fontSize: 15,
                  color: '#747474',
                }}
              />

              <HideView hide={this.state.isHidden}>

                <View style={styles.inputouter}>
                  <Text style={styles.label}>Email Address</Text>
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='transparent'
                    placeholder="Enter your Email Address"
                    placeholderTextColor="#D3D3D3"
                    keyboardType="email-address"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email} />
                </View>
              </HideView>
              <HideView hide={!this.state.isHidden}>
                <View style={styles.inputouter}>

                  <Text style={styles.label}>Mobile Number</Text>
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='transparent'
                    placeholder="Enter your Mobile Number"
                    placeholderTextColor="#D3D3D3"
                    keyboardType="phone-pad"
                    dataDetectorTypes="phoneNumber"
                    maxLength={10}
                    onChangeText={(mobile) => this.setState({ mobile })}
                    value={this.state.mobile}
                  />
                </View>
              </HideView>
              <TouchableOpacity onPress={this.handlePress.bind(this)}>
                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>

                  <Text style={styles.buttonText}>Submit</Text>

                </LinearGradient>
              </TouchableOpacity>

            </View>
          </View>


          <Modal isVisible={this.state.OtpModal} animationIn='slideInUp' animationOut='slideOutDown'>
            <View style={styles.blurbg}>
              <View style={styles.otpcontainer}>
                <Text style={styles.otptext}> 
                  Please enter the OTP you have recieved on the registered mobile number
            </Text>
                <CodeInput
                  ref="codeInputRef1"
                  secureTextEntry
                  className={'border-b'}
                  space={15}
                  size={40}
                  inputPosition='center'
                  inactiveColor='#AB00BB'
                  activeColor='#AB00BB'
                  onFulfill={(code) => this._onFulfill(code)}
                  codeInputStyle={{
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                  }}
                  containerStyle={{
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                  }}
                />
                <TouchableOpacity style={styles.submitbtn} onPress={() => this.onConfirm()} disabled={this.state.disable}>
                  <Text style={styles.submittext}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Modal isVisible={this.state.alertModal} animationIn='slideInUp' animationOut='slideOutDown'>
            <View style={styles.blurbg}>
              <View style={styles.alertcontainer}>
                <Text style={styles.suggtxt}>
                  Please check your registered email to reset your password.
            </Text>
                <TouchableOpacity style={styles.submitbtn} onPress={() => this.setState({ alertModal: false, OtpModal: true })} >
                  <Text style={styles.submittext}>OK</Text>
                </TouchableOpacity>
              </View> 
            </View>
          </Modal>


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
  disabled: {
    opacity: 0.3,
  },
  blurbg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: -50,
    bottom: -50,
    left: -50,
    right: -50,
  },
  otpcontainer: {
    backgroundColor: '#fff',
    width: 300,
    height: 190,
    borderRadius: 8,
    padding: 15,
  },
  alertcontainer: {
    backgroundColor: '#fff',
    width: 300,
    height: 120,
    borderRadius: 8,
    padding: 15,
  },
  suggtxt: {
    fontSize: 13,
    lineHeight: 20,
    color: '#747474',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginTop: 4,
    marginBottom: 15
  },
  otptext: {
    fontSize: 13,
    lineHeight: 20,
    color: '#747474',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginTop: 10
  },
  submittext: {
    color: '#AB00BB',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    borderTopWidth: 1,
    borderColor: '#eeeeee',
    paddingTop: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    width: 200
  },
  container: {
    backgroundColor: '#fff',
    width: '100%'
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
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 15,
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