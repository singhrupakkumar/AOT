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
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import Panel from '../Component/Accordion_Panel';  


export default class CandidateProfile extends Component {
  
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
      
            <View style={styles.accordiansec}>

              <Panel style={styles.acchead} title="Personal Details">
                <View style={styles.mainrow}>
                    <View style={styles.halfsec}>
                        <Text style={styles.subhading}>First Name</Text>
                        <Text style={styles.detailtxt}>John</Text>
                    </View>
                    <View style={styles.halfsec}>
                        <Text style={styles.subhading}>Middle Name</Text>
                        <Text style={styles.detailtxt}>Doe</Text>
                    </View>
                    <View style={styles.halfsec}>
                        <Text style={styles.subhading}>Surname</Text>
                        <Text style={styles.detailtxt}>Doe</Text>
                    </View>
                    <View style={styles.halfsec}>
                        <Text style={styles.subhading}>D.O.B</Text>
                        <Text style={styles.detailtxt}>29-10-1990</Text>
                    </View>
                    </View>
              </Panel>

              <Panel style={styles.acchead} title="Work Experience">
                <View style={styles.mainrow}>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Company Name</Text> 
                    <Text style={styles.detailtxt}>Quantum</Text> 
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Job Name</Text>
                    <Text style={styles.detailtxt}>Manager</Text>
                  </View>
                  <View style={styles.fullsec}>
                    <Text style={styles.subhading}>Description</Text>
                    <Text style={styles.detailtxt}>Lorem ipsum dolor is not a dummy content.</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Start Date</Text>
                    <Text style={styles.detailtxt}>31-01-2019</Text>
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>End Date</Text>
                    <Text style={styles.detailtxt}>01-02-2019</Text> 
                  </View>
                   <View style={styles.refrencehead}>
                       <Text style={styles.refheading}>References</Text>
                   </View>
                  <View style={styles.refrencerow}> 
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Name</Text>
                    <Text style={styles.detailtxt}>Join Doe</Text> 
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Contact Number</Text>
                    <Text style={styles.detailtxt}>+1234567890</Text> 
                  </View>
                  </View>

                 <View style={styles.refrencerow}> 
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Name</Text>
                    <Text style={styles.detailtxt}>Join Doe</Text> 
                  </View>
                  <View style={styles.halfsec}>
                    <Text style={styles.subhading}>Contact Number</Text>
                    <Text style={styles.detailtxt}>+1234567890</Text> 
                  </View>
                  </View>
                
                </View>
              </Panel>

              <Panel style={styles.acchead} title="Job Roles">
                <View style={styles.mainrow}>
                  <View style={styles.halfsec}>
                  <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                    <Text style={styles.roledetailtxt}>Manager</Text>
                  </View>
                  <View style={styles.halfsec}>
                  <Image style={styles.circle} source={require('../assets/icons/fillcircle.png')} />
                    <Text style={styles.roledetailtxt}>Engineer</Text>
                  </View>
                  <View style={styles.fullsec}>
                    <Text style={styles.subhading}>Summary</Text>
                    <Text style={styles.detailtxt}>Lorem ipsum dolor is not a dummy content.</Text>
                  </View>
                </View>
              </Panel>

                <Panel style={styles.acchead} title="Availablity">
                <View style={styles.mainrow}>
                  <View style={styles.avlfullsec}>
                    <Text style={styles.avlsubhading}>Monday</Text>
                    <View style={styles.daytimesec}> 
                      <Text style={styles.avldetailtxt}>Morning (8:00-12:00)</Text>
                      <Text style={styles.avldetailtxt}>Evening (17:00- 23:00)</Text>
                    </View>
                  </View>
                  <View style={styles.avlfullsec}>
                    <Text style={styles.avlsubhading}>Wednesday</Text>
                    <View style={styles.daytimesec}> 
                      <Text style={styles.avldetailtxt}>Morning (8:00-12:00)</Text>
                      <Text style={styles.avldetailtxt}>Evening (17:00- 23:00)</Text>
                    </View>
                  </View>
                </View>
              </Panel>

                <View style={styles.langouter}>
                  <Text style={styles.langtext}>Languages (English, French, Spanish)</Text>
                </View>

                <View style={styles.downloadouter}>
                  <Text style={styles.downloadtxt}>Download Cv</Text>
                  <Image style={styles.lgdownload} source={require('../assets/icons/download.png')} />
                </View>

                <View style={styles.downloadouter}>
                  <Text style={styles.downloadtxt}>Download Video</Text>
                  <Image style={styles.lgdownload} source={require('../assets/icons/download.png')} />
                </View>
                <View style={styles.documentouter}>
                <Text style={styles.dochead}>Download Document</Text>
                  <View style={styles.documentdownloat}>
                    <Text style={styles.downloaddoctxt}>Download Video</Text>
                    <Image style={styles.lgdownload} source={require('../assets/icons/download.png')} />
                  </View>
                  <View style={styles.documentdownloat}>
                    <Text style={styles.downloaddoctxt}>Download Video</Text>
                    <Image style={styles.lgdownload} source={require('../assets/icons/download.png')} />
                  </View>
                </View>
                
              
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
  container1: {
    padding: 18,
    paddingTop: 60,
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
  langouter:{
    backgroundColor: '#fff',
    marginTop: 21,
    overflow: 'hidden',
    elevation: 4,
    color: '#747474',
    borderRadius: 8,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 15, 
    paddingRight: 15
  },
  langtext:{
   color:'#747474',
   fontSize:15,
   fontWeight: '500',
      
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
  avlsubhading: {
    fontSize: 13,
    lineHeight: 17,
    color: '#000',
    width: '30%'
  },
  refheading:{
    fontSize: 15,
    lineHeight: 20,
    color: '#747474',
    fontWeight:'500',
  },
  detailtxt: {
    fontSize: 13,
    lineHeight: 17,
    color: '#747474',
  }, 
  avldetailtxt: {
    fontSize: 13,
    lineHeight: 17,
    color: '#747474',
    marginBottom: 3
  }, 
  daytimesec: {
    width: '60%',
    paddingLeft: 20
  },
  avlfullsec: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5
  },
  roledetailtxt: {
    fontSize: 13,
    lineHeight: 17,
    color: '#747474',
    paddingLeft: 18
  },

  refrencehead: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#eeeeee',
    paddingTop: 12,
    marginTop: 10
  },
  refrencerow:{
    width:'100%',
    display:'flex',
    flexDirection:'row',

  },
  circle: {
    left: 0,
    top: 3.5,
    position: 'absolute',
    width: 10,
    height: 10
  },
  downloadtxt: {
    color: '#9700C3',
    fontSize: 15,
    fontWeight: '500',
    marginRight: 8
  },
  downloadouter:{
    backgroundColor: '#fff',
    marginTop: 21,
    overflow: 'hidden',
    elevation: 4,
    color: '#747474',
    borderRadius: 8,
    padding: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentouter: {
    backgroundColor: '#fff',
    marginTop: 21,
    overflow: 'hidden',
    elevation: 4,
    color: '#747474',
    borderRadius: 8,
    padding: 16,
  },
  lgdownload: {
    width: 20,
    height: 20,
    marginLeft: 8
  },
  dochead: {
    fontSize: 15,
    lineHeight: 20,
    color: '#747474',
    fontWeight:'500',
    marginBottom: 8
  },
  documentdownloat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  downloaddoctxt: {
    fontSize: 13,
    fontWeight: '500',
    color: '#747474'
  }
});