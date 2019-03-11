import React, { Component } from 'react';
import Textarea from 'react-native-textarea';
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
  ScrollView,
  AsyncStorage,
  TouchableHighlight, 
  Platform,
  ActivityIndicator
} from 'react-native'; 
import {
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import HideView from '../Component/HideView';
import { Actions } from 'react-native-router-flux';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
 

export default class Message extends Component {
  
  constructor(props) {     
    super(props);       
   
    this.state = {   
      isHidden: true,    
   };  
         
  }

  static navigationOptions = ({ navigation}) => {    
           
    return {
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
    };
  };


  handlePress = async () => {

    alert(this.state.password)
    fetch('http://104.248.120.98:3000/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'gjarogtvhyzbtfjymwfvhyqnrowtekdoboqkedvperrwbprift'
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
        <ScrollView style={styles.container}>
     
          <View style={styles.container1}>
            <View style={styles.leftsec}>
                <Text style={styles.bluetxt}>Hey! What’s Up ?</Text> 
                <Text style={styles.whittxt}>Hey! What’s Up ?</Text>
                <Text style={styles.bluetxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                <Text style={styles.whittxt}>Hey! What’s Up ?</Text>
                <Text style={styles.whittxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                <Text style={styles.whittxt}>Hey! What’s Up ?</Text>
                <Text style={styles.bluetxt}>Hey! What’s Up ?</Text>
                <Text style={styles.bluetxt}>Hey! What’s Up ?</Text>
            </View>
           
          </View>
        </ScrollView>
        <View style={styles.bottomsec}>
                <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    onChangeText={this.onChange}
                    defaultValue={this.state.description}
                    placeholder={'Type a message here...'}
                    placeholderTextColor={'#747474'}
                    underlineColorAndroid={'transparent'}
                />
                <View style={styles.buttonouter}>
                <TouchableOpacity>
                  <Image style={styles.attectimg} source={require('../assets/icons/attachment.png')} /> 
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image style={styles.sendimg} source={require('../assets/icons/sendarrow.png')} />    
                  </TouchableOpacity>
                </View>
        </View>
      </View>
    );  



  
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    position: 'relative',
    height: '100%'
  },
  container1: {
    padding: 18,
    paddingTop: 60,
    paddingBottom: 116
  },
  leftsec: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
  },
  bluetxt: {
      backgroundColor: '#5723E4',
      fontSize: 13,
      color: '#fff',
      width: '60%',
      alignSelf: 'flex-start',
      borderRadius: 20,
      borderTopLeftRadius: 0,
      elevation: 4,
      padding: 16,
      marginVertical: 8
  },
  whittxt: {
    backgroundColor: '#fff',
    fontSize: 13,
    color: '#747474',
    width: '60%',
    alignSelf: 'flex-end',
    borderRadius: 20,
    borderTopRightRadius: 0,
    elevation: 4,
    padding: 16,
    marginVertical: 8
},
bottomsec: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F9F9F9',
    zIndex: 99,
    borderTopWidth: 1,
    borderColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    padding: 18,
    maxHeight: 150,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
},
textareaContainer: {
    padding: 0,
    margin: 0,
    width: width - 110,
    maxHeight: 40,
    minHeight: 0
},
textarea: {
    padding: 0,
    margin: 0,
    minHeight: 0
},
attectimg: {
    height: 18,
    width: 18,
    marginRight: 5
},
sendimg: {
  height: 28,
  width: 28,
  marginLeft: 5
},
buttonouter: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}
});