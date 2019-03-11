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
  Picker,
  ScrollView,
  ActivityIndicator,
  Platform,
  Slider,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 37.0902,
      long: 95.7129,
      slidervalue: 1,
      region: {
        latitude: 37.0902,
        longitude: 95.7129,
        latitudeDelta: 5.0922,
        longitudeDelta: 1.0421,
      }
    };
  }

  slidechange(value) {
    this.setState(() => {
      return {
        slidervalue: parseFloat(value),
      };
    });
  }


  getInitialState() {
    return {
      region: {
        latitude: 37.0902,
        longitude: 95.7129,
        latitudeDelta: 5.0922,
        longitudeDelta: 1.0421,
      },
    };
  }

  onRegionChange(region) {
    // this.setState({ region:region });                 
  }


  searchaddress(address) {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyBe2FxhsliGh3iqlL_aHBi6va3_naQIVkA&sensor=false')
      .then((response) => response.json())
      .then((responseJson) => {
        var latval = responseJson.results[0].geometry.location.lat;
        var longval = responseJson.results[0].geometry.location.lng;
        this.setState({ lat: latval });
        this.setState({ long: longval });
        const latDelta = Number(responseJson.results[0].geometry.viewport.northeast.lat) - Number(responseJson.results[0].geometry.viewport.southwest.lat)
        const lngDelta = Number(responseJson.results[0].geometry.viewport.northeast.lng) - Number(responseJson.results[0].geometry.viewport.southwest.lng)
        var regiondata1 = {
          longitudeDelta: lngDelta,
          latitudeDelta: latDelta,
          longitude: longval,
          latitude: latval
        };
        this.setState({ region: regiondata1 });
      })
  }

  handlePress = async () => {
    Alert.alert(
      '',
      'Saved successfully',
      [{ text: 'OK' }],
      { cancelable: false }
    );
    this.props.navigation.navigate('JobPost');
    // Alert.alert(
    //   '',
    //   '"Congratulation! You have successfully registered on our platform and a member of staff will be in touch shortly."',
    //   [
    //     {text: 'OK', onPress: () => console.log('OK Pressed')},
    //   ],
    //   { cancelable: false }
    // )  
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
    //     Alert.alert(
    //       '',
    //       '"Congratulation! You have successfully registered on our platform and a member of staff will be in touch shortly."',
    //       [
    //         {text: 'OK', onPress: () => console.log('OK Pressed')},
    //       ],
    //       { cancelable: false }
    //     )  

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
      <TouchableOpacity onPress={() => this.props.navigation.navigate('JobPost')}>
        <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
      </TouchableOpacity>
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
    return (
      <View style={styles.containerout}>
        <StatusBar
          barStyle="light-content" backgroundColor="transparent" translucent={true}
        />

        <ScrollView style={styles.container}>
          <View style={styles.container1}>
            <View style={styles.inputouter}>
              <View style={styles.inputouter1}>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='transparent'
                  placeholder="Search here"
                  placeholderTextColor="#747474"
                  onChangeText={(searchval) => this.setState({ searchval })}
                  value={this.state.searchval}

                />
                <TouchableOpacity style={styles.srchimg} onPress={() => { this.searchaddress(this.state.searchval) }}>
                  <Image style={styles.srchimg1} source={require('../assets/icons/searchicon.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <MapView style={styles.mapstyle}
              region={this.state.region}
              onRegionChange={this.onRegionChange}
              showsUserLocation={true}
              zoomEnabled={true}
            >

            </MapView>
            <Text style={{ fontWeight: '500', color: '#000000', fontSize: 15, paddingHorizontal: 17, marginTop: 17 }}>Distance from Location</Text>
            <View style={styles.kmouter}>
              <Text style={styles.text}>{String(this.state.slidervalue)}Km</Text>
              <Text style={styles.text}>10Km</Text>
            </View>
            <Slider
              style={styles.sliderstyle}
              trackStyle={{
                height: 50,
                borderRadius: 15,
              }}
              step={1}
              maximumValue={10}
              minimumTrackTintColor='rgba(204, 204, 204, 0.4)'
              maximumTrackTintColor='rgba(204, 204, 204, 0.8)'
              thumbTintColor='#5920E2'
              onValueChange={this.slidechange.bind(this)}
              value={this.state.slidervalue}
            />
            <TouchableOpacity style={{ marginTop: 10 }} onPress={this.handlePress.bind(this)}>
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
    paddingTop: 10,
    paddingBottom: 20,
  },
  sliderstyle: {
    borderRadius: 10,
  },
  mapstyle: {
    height: 300,
    width: '100%'
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
  inputouter: {
    paddingHorizontal: 17,
    paddingBottom: 17,
    paddingTop: 50,
  },
  inputouter1: {
    height: 35,
    backgroundColor: 'rgba(204, 204, 204, 0.3)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingRight: 50,
    paddingLeft: 15
  },
  srchimg: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 7,
    right: 15,
    margin: 'auto',
  },
  srchimg1: {
    height: 20,
    width: 20,
  },
  inputBox: {
    fontSize: 13,
    fontWeight: '500',
    color: '#747474',
    width: '100%',
    height: 35,
  },
  kmouter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 17,
    justifyContent: 'space-between',
    paddingVertical: 14,
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
    marginTop: 28,
    marginBottom: 30,
  },

});