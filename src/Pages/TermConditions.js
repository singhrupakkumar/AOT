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
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box'
import Modal from "react-native-modal";
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

export default class TermConditions extends Component {
  constructor(props) {  
    super(props);
  }

  state = {
    email: '',
    password: ''
  }



  handlePress = async () => {

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
        <TouchableOpacity onPress={() => Actions.pop()}>  
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

        <ScrollView>   
          <View style={styles.container}>
            <StatusBar
              barStyle="light-content" backgroundColor="transparent" translucent={true}
            />
            <View style={styles.lcontainer}>
                <Text style={styles.p}>
                Lorem ipsum dolor sit amet, has oblique apeirian ut, eu ullum mollis forensibus sed, ex has viris nominati. Alii definitionem conclusionemque ut mel, ei usu tollit doming dissentiet. At quo amet aperiam facilisis, vel duis possit.
                </Text>  
                <View style={styles.li}>
                  <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                  <Text style={styles.p}>Te reque viderer sadipscing mea, in fabulas dissentiunsed. Iisque euismod probatus an eam. Dicant feugiat</Text>
                </View>  
                <View style={styles.li}>
                  <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                  <Text style={styles.p}>Te reque viderer sadipscing mea, in fabulas dissentiunsed. Iisque euismod probatus an eam. Dicant feugiat</Text>
                </View> 
                <View style={styles.li}>
                  <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                  <Text style={styles.p}>Te reque viderer sadipscing mea, in fabulas dissentiunsed. Iisque euismod probatus an eam. Dicant feugiat</Text>
                </View> 
                <View style={styles.li}>
                  <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                  <Text style={styles.p}>Te reque viderer sadipscing mea, in fabulas dissentiunsed. Iisque euismod probatus an eam. Dicant feugiat</Text>
                </View> 
                <View style={styles.li}>
                  <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                  <Text style={styles.p}>Te reque viderer sadipscing mea, in fabulas dissentiunsed. Iisque euismod probatus an eam. Dicant feugiat</Text>
                </View> 
               
            </View>
          </View>

        </ScrollView>

      );

    }
  }



const styles = StyleSheet.create({
  indicator: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  li: {
    position: 'relative',
    paddingLeft: 25,
    marginTop: 12
  },
  circle: {
    width: 10,
    height: 10,
    position: 'absolute',
    top: 6,
    left: 0,
  },
  container: {
    backgroundColor: '#fff',
    padding: 18,
    paddingTop: 50,
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
    textAlign: 'left',
  },
  lcontainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});