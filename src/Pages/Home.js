import React from 'react'
import { Platform, Dimensions, TouchableOpacity, Text, View, Image, ImageBackground, StatusBar, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const Home = () => {

  handlePress = async () => {
    fetch('http://rupak.gangtask.com/giftcard/api/giftcards/mytest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "user_id": 1
      })
    })
      .then((response) => response.json()) 
      .then((responseJson) => {
        Actions.login()
        console.log(responseJson);
        // Alert.alert("Author name at 0th index:  " + responseJson.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (

    <View style={styles.container}>

      <Swiper activeDotColor="#A9449D" style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <ImageBackground source={require('../assets/images/intro_header.png')} style={styles.gradbg}>
            <Image source={require('../assets/images/Vendor_icon.png')} />
          </ImageBackground>
          <Text style={styles.h2}>Lorem Ipsum</Text>
          <Text style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </Text>
        </View>
        <View style={styles.slide2}>
          <ImageBackground source={require('../assets/images/intro_header.png')} style={styles.gradbg}>
            <Image source={require('../assets/images/worker-image-on-card.png')} />
          </ImageBackground>
          <Text style={styles.h2}>Lorem Ipsum</Text>
          <Text style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </Text>
        </View>
        <View style={styles.slide3}>
          <ImageBackground source={require('../assets/images/intro_header.png')} style={styles.gradbg}>
            <Image source={require('../assets/images/intro3.png')} />
          </ImageBackground>
          <Text style={styles.h2}>Lorem Ipsum</Text>
          <Text style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </Text>
        </View>
      </Swiper>
      <TouchableOpacity onPress={() => Actions.login()}>
        <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
          <Text style={styles.buttonText}> Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>



  )
}



export default Home



const styles = StyleSheet.create({
  gradbg: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: imageHeight,
    width: imageWidth
  },
  bgouter: {
    width: 600,
    height: 320
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
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
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
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
    marginBottom: 60,
  },
});