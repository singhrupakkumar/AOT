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
  ActivityIndicator,
  ScrollView,
  AsyncStorage  
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import CheckBox from 'react-native-check-box'


export default class Login extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    password: ''
  }

  handlePress = async () => { 
    
    try {   
      if(this.state.email == 'company@gmail.com'){
        await AsyncStorage.setItem('IsLogin', 'company');
      }else if(this.state.email == ''){    
        alert('Email Address required');  
        return false 
      }else{
        await AsyncStorage.setItem('IsLogin', 'user'); 
      }
     
    } catch (error) {  
      // Error saving data
    }     
   Actions.usernavigation() 


    // this.setState({apidata:0})
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

    //     Actions.usernavigation()
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

    headerLeft: null,

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
              <View style={styles.inputouter}>
                <View style={styles.icnouter}>
                  <Image style={styles.inputicn} source={require('../assets/icons/email.png')} />
                </View>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Email/Mobile"
                  placeholderTextColor="#747474"
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email} />
              </View>
              <View style={styles.inputouter}>
                <View style={styles.icnouter}>
                  <Image style={styles.inputicn} source={require('../assets/icons/lock.png')} />
                </View>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#747474"
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />

                <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row' }}>

                    <CheckBox
                      style={{ flex: 1, marginTop: 13, marginLeft: -2 }}
                      onClick={() => {
                        this.setState({
                          isChecked: !this.state.isChecked
                        })
                      }}
                      isChecked={this.state.isChecked}
                      rightText={"Remember me"}
                      checkBoxColor='#A6A6A6'
                      checkedCheckBoxColor='#8000CD'
                      rightTextStyle={{
                        fontSize: 12,
                        color: '#747474'
                      }}
                    />

                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={this.handlePress.bind(this)}>
                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                  <Text style={styles.buttonText}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.forgotText} onPress={() => {
                Actions.forgot()
              }}>Forgot Password?</Text>
              <View style={styles.social}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                  <Image style={styles.socialicn} source={require('../assets/icons/facebook-2x.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                  <Image style={styles.socialicn} source={require('../assets/icons/in-2x.png')} />
                </TouchableOpacity>
              </View>

              <Text style={styles.dontacc}>Don't have an account yet?</Text>




              <TouchableOpacity style={styles.signupbtn} onPress={() => {
                Actions.signup()
              }}>
                <Image style={{}} source={require('../assets/icons/regbtn.png')} />
              </TouchableOpacity>


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
  },
  inputBox: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    paddingLeft: 45,
    width: '100%',
    borderRadius: 5,
    color:'#747474', 
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
    width: 20,
    height: 20,
  },
  socialicn: {
    width: 25,
    height: 25,
    marginLeft: 6,
    marginRight: 6,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 65,
    marginBottom: 10,
  },
});