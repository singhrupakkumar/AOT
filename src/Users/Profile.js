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
import LinearGradient from 'react-native-linear-gradient';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import Panel from '../Component/Accordion_Panel';  
import ImagePicker from 'react-native-image-crop-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class Profile extends Component {
  
  constructor(props) {     
    super(props);       
   
    this.state = { 
      IsLogin: '',
      isHidden: true,    
      companyis:false,
   };  
         
  }



  takephoto(){
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };



  async componentDidMount() {        
    const loginvalue = await AsyncStorage.getItem('IsLogin');
    this.setState({ IsLogin: loginvalue }); 
    if(this.state.IsLogin == ''){  
      Actions.login();
    }   
    if(this.state.IsLogin == 'company'){      
      this.setState({ isHidden: false });
      global.MyTitle = 'Profile';     
      this.setState({ companyis: true});  
    }else{    
      global.MyTitle = 'Domicilliary Profile';           
    } 

  }


 
  static navigationOptions = ({ navigation}) => {    
    const {state} = navigation;
    var dd = global.MyTitle;             
    return {
      headerTitle: dd,
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

    let pic = require('../assets/images/profilepic.png'); 
    let username = 'Jon';

    if (this.state.companyis) {
        pic = require('../assets/images/profileimg.png');   //Step 4 
        username = 'Quantam';
    }

    return (

      <View style={styles.container}>
        <StatusBar
          barStyle="light-content" backgroundColor="transparent" translucent={true}
        />
        <ScrollView style={styles.container}>
     
          <View style={styles.container1}>
            <View style={styles.imgsec}>
              <View style={styles.imgout}>
                <View style={styles.imgwrapper}>
                  <Image style={{ height: 98, width: 104 }} source={pic} />       
                </View>
                <TouchableOpacity style={styles.camerabtn} onPress={()=>this.takephoto() }>         
                <Image style={styles.camerabtn1} source={require('../assets/icons/photo-camera.png')} />
                </TouchableOpacity>          
              </View>
              <Text style={styles.top_h2}>{username}</Text>
              <Text style={styles.top_p}>Social Care, Hospitality</Text>   
              <Text style={styles.top_p}>USA(01100)</Text>
            </View>
            <View style={styles.accordiansec}>

              <Panel style={styles.acchead} title="Address">
                <View style={styles.address}>
                <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                    <Text style={styles.addtxt}>8197 Selby Street Raeford,</Text>
                    <Text style={styles.addtxt}>NC 28376</Text>
                </View>
                <View style={styles.address}>
                <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                    <Text style={styles.addtxt}>8197 Selby Street Raeford,</Text>
                    <Text style={styles.addtxt}>NC 28376</Text>
                </View>
              </Panel>
              <HideView hide={this.state.isHidden}>   
              <Panel style={styles.acchead} title="Company Details">
                <View style={styles.mainrow}>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Company Name</Text> 
                    <Text style={styles.detailtxt}>Quantum</Text> 
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Brand Name</Text>
                    <Text style={styles.detailtxt}>QU134</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>VAT Number</Text>
                    <Text style={styles.detailtxt}>123456</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Hiring Capacity</Text>
                    <Text style={styles.detailtxt}>100</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Company Number</Text>
                    <Text style={styles.detailtxt}>1234567890</Text>
                  </View>
                  <View style={styles.fullsec}>
                    <Text style={styles.subhading}>Company Description</Text>
                    <Text style={styles.detailtxt}>company description is just one part of your small plan. The business plan outlines your goals and how to achieve them.</Text>
                  </View>
                </View>
              </Panel>
              </HideView>
              <Panel style={styles.acchead} title="Contact Info">
                <View style={styles.mainrow}>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Name</Text>
                    <Text style={styles.detailtxt}>John Doe</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Mobile Number</Text>
                    <Text style={styles.detailtxt}>1234567890</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Telephone Number</Text>
                    <Text style={styles.detailtxt}>1234567890</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Email</Text>
                    <Text style={styles.detailtxt}>Johndoe@gmail.com</Text>
                  </View>
                </View>
              </Panel>


            </View>
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
  iconCamera:{
color:'red',
  },
  container1: {
    padding: 18,
    paddingTop: 60,
  },
  imgsec: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgwrapper: {
    width: 104,
    height: 98,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imgout: {
    width: 114,
    height: 106,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  camerabtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 20,
    width: 20,
    zIndex: 999
  },
  camerabtn1: {
    height: 20,
    width: 20
  },
  top_h2: {
    fontSize: 15,
    fontWeight: '500',
    color: '#747474',
    textAlign: 'center',
    marginTop: 8,
  },
  top_p: {
    fontSize: 13,
    fontWeight: '400',
    color: '#747474',
    textAlign: 'center',
    marginTop: 3,
  },
  acchead: {
    color: '#747474',
    borderRadius: 20,
    padding: 20
  },
  address: {
    position: 'relative',
    paddingLeft: 20,
    marginBottom: 7
  },
  circle: {
    left: 0,
    top: 5,
    position: 'absolute',
    width: 10,
    height: 10
  },
  mainrow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  halfsec: {
    width: '50%',
    paddingRight: 10,
    marginBottom: 10,
    marginTop: 5
  },
  subhading: {
    fontSize: 13,
    lineHeight: 17,
    color: '#000'
  },
  detailtxt: {
    fontSize: 13,
    lineHeight: 17,
    color: '#747474'
  }, 
   preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  cameracontainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});