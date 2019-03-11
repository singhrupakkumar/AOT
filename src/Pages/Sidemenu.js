import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions, DrawerActions } from 'react-navigation';
import {
  Platform, Alert, StyleSheet, Text, View, Image, TouchableNativeFeedback, ScrollView,
  ImageBackground, AsyncStorage, TextInput, TouchableOpacity, StatusBar, Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import LinearGradient from 'react-native-linear-gradient';
var routecache = '';

class Sidemenu extends Component { 

  constructor(props) {
    super(props);
    this.state = { 
      IsLogin: '', 
      companyis:false,   
   };  
  }

  async componentDidMount() {        
    const loginvalue = await AsyncStorage.getItem('IsLogin');
    this.setState({ IsLogin: loginvalue }); 
    if(this.state.IsLogin == ''){  
      Actions.login();
    }   
    if(this.state.IsLogin == 'company'){     
      this.setState({ companyis: true});       
    } 
  
 
  }
  Logout(){     
    AsyncStorage.clear();    
    Actions.login();    
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    routecache = route;
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render() {
    return (

      <View>
        <TouchableNativeFeedback onPress={this.navigateToScreen(routecache)}>


          <View style={styles.container}>  
            <LinearGradient start={{ x: 1.0, y: 1.3 }} end={{ x: 1.3, y: 0.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={{ width: 260, height: '100%' }}>
              <ScrollView style={styles.container1}>     
                <View style={styles.sidemenuTop}>
                  <Image style={{ height: 98, width: 104, marginRight: 11 }} source={require('../assets/images/profilepic.png')} />
                  <View style={styles.toptxtsec}>
                    <Text style={{ fontSize: 15, color: '#fff', fontWeight: '500', marginBottom: 2 }}>John Doe</Text>
                    <Text style={{ fontSize: 13, color: '#fff', marginTop: 2 }}>johndoe@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.navItemStylecontainer}>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Dashboard')}>  
                    <Image style={styles.IconStyle} source={require('../assets/icons/dashboard.png')} />
                    <Text style={styles.navItemStylegray}>Dashboard</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Profile')}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/usericon.png')} />
                    <Text style={styles.navItemStylegray}>Profile</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('ChangePassword')}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/lockicon.png')} />
                    <Text style={styles.navItemStylegray}>Change Password</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('JobPost')}> 
                    <Image style={styles.IconStyle} source={require('../assets/icons/portfolio.png')} />
                    <Text style={styles.navItemStylegray}>Job Post</Text> 

                  </TouchableOpacity>
              
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Notification')}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/notification.png')} />
                    <Text style={styles.navItemStylegray}>Alert</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Applicants')}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/Applicants.png')} />
                    <Text style={styles.navItemStylegray}>Applicants</Text>  

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('PaymentStatus')}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/payment.png')} />
                    <Text style={styles.navItemStylegray}>Payment Status</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Template')}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/website.png')} />
                    <Text style={styles.navItemStylegray}>Template</Text>       
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('PrivacyPolicy')}> 
                    <Image style={styles.IconStyle} source={require('../assets/icons/shield.png')} />
                    <Text style={styles.navItemStylegray}>Privacy Policy</Text>       
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('Faq')}> 
                    <Image style={styles.IconStyle} source={require('../assets/icons/faq.png')} />
                    <Text style={styles.navItemStylegray}>FAQ’s</Text>        
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('ContactUs')}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/contact.png')} />
                    <Text style={styles.navItemStylegray}>Contact Us</Text>        
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={this.navigateToScreen('ReportIssue')}>  
                    <Image style={styles.IconStyle} source={require('../assets/icons/issue.png')} />
                    <Text style={styles.navItemStylegray}>Report an Issue</Text>                 
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navItemStyle} onPress={()=>this.Logout()}>
                    <Image style={styles.IconStyle} source={require('../assets/icons/logout.png')} />
                    <Text style={styles.navItemStylegray}>Signout</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </LinearGradient>
          </View>


        </TouchableNativeFeedback>
      </View>

    );
  }
}

Sidemenu.propTypes = {
  navigation: PropTypes.object
};

export default Sidemenu;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  container1: {
    paddingLeft: 17,
    paddingRight: 17,
  },
  sidemenuTop: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 17,
    borderBottomWidth: 1,
    borderColor: '#7154EA',
  },
  IconStyle: {
    height: 22,
    width: 22,
    marginRight: 15,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 55
  },
  headerTitle: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center'
  },
  navItemStylewhite: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 16,
    color: '#000000',
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#E5E5E5'
  },
  navItemStyle: {
    borderBottomWidth: 1,
    borderColor: '#7154EA',
    paddingRight: 7,
    paddingLeft: 7,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    height: 43
  },
  navItemStylegray: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  headsec: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#535353'
  },
  sectionHeadingStyle: {
    color: '#ffffff',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 16,
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  navSectionStyle1: {
    backgroundColor: 'white'
  },

  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});