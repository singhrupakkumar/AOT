import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Image, 
  View, TouchableOpacity,AsyncStorage
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import EditProfile from '../Users/EditProfile';
import Profile from '../Users/Profile';
import ChangePassword from '../Users/ChangePassword';
import ContactDetails from '../Users/ContactDetails';
import Address from '../Users/Address';
import CompanyDetails from '../Company/CompanyDetails';
import JobPost from '../Jobs/JobPost';
import JobDetails from '../Jobs/JobDetails';
import Location from '../Jobs/Location';
import Skills from '../Jobs/Skills'; 
import UploadFile from '../Jobs/UploadFile';  
import Payments from '../Jobs/Payments';
import SetTime from '../Jobs/SetTime'; 
import EditRole from '../Jobs/EditRole'; 
import JobSummary from '../Jobs/JobSummary';
import Template from '../Jobs/Template';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import Faq from '../Pages/Faq';
import ContactUs from '../Pages/ContactUs';
import Dashboard from '../Pages/Dashboard';
import ReportIssue from '../Pages/ReportIssue';
import Notification from '../Pages/Notification';
import PaymentStatus from '../Pages/PaymentStatus';     
import DashboardJobDetails from '../Jobs/DashboardJobDetails'; 
import CandidateProfile from '../Users/CandidateProfile';
import Message from '../Users/Message';
import Appointment from '../Jobs/Appointment';
import Applicants from '../Jobs/Applicants';  
import ChooseFilterCandidate from '../Jobs/ChooseFilterCandidate'; 
import BrowseCandidate from '../Jobs/BrowseCandidate';        
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);  
const imageWidth = dimensions.width;
import { Actions } from 'react-native-router-flux';
            
const Drawerstack = createStackNavigator({             

  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({      
      title: 'Profile',                      
      headerLeft: (<TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>
      ),
      headerRight: ( 
        <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }}>
          <Image style={{ height: 20, width: 20, marginRight: 15, marginTop: 17 }} source={require('../assets/icons/edit.png')} />
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
    })
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: ({ navigation }) => ({
      title: "Change Password",
      headerLeft: (<TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: ({ navigation }) => ({
      title: "EditProfile",
      headerLeft: (<View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
        </TouchableOpacity>

      </View>
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  ContactDetails: {
    screen: ContactDetails,
    navigationOptions: ({ navigation }) => ({
      title: "ContactDetails",
      headerLeft: (<View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
        </TouchableOpacity>

      </View>
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },

  Address: {
    screen: Address,
    navigationOptions: ({ navigation }) => ({ 
      title: "Address",
      headerLeft: (<View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
        </TouchableOpacity>

      </View>
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  CompanyDetails: {
    screen: CompanyDetails,
    navigationOptions: ({ navigation }) => ({
      title: "CompanyDetails",
      headerLeft: (<View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
        </TouchableOpacity>

      </View>
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  JobPost: {
    screen: JobPost,
    navigationOptions: ({ navigation }) => ({
      title: "JobPost",
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  JobDetails: { 
    screen: JobDetails,
    navigationOptions: ({ navigation }) => ({   
      title: "JobDetails",
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  Location: {
    screen: Location,
    navigationOptions: ({ navigation }) => ({   
      title: "Location",
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  Skills: {
    screen: Skills,
    navigationOptions: ({ navigation }) => ({   
      title: "Skills",
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  UploadFile: {
    screen: UploadFile,
    navigationOptions: ({ navigation }) => ({   
      title: "Upload File",    
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  SetTime: {
    screen: SetTime,
    navigationOptions: ({ navigation }) => ({   
      title: "Set Time",     
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  Payments: {
    screen: Payments,
    navigationOptions: ({ navigation }) => ({   
      title: "Payments",     
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  EditRole: {
    screen: EditRole,
    navigationOptions: ({ navigation }) => ({   
      title: "Job Post",        
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('JobPost')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    }) 
  },
  JobSummary: {
    screen: JobSummary,
    navigationOptions: ({ navigation }) => ({     
      title: "Job Summary",            
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('EditRole')}>  
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
      <TouchableOpacity onPress={() => { navigation.navigate('JobPost') }}>    
        <Image style={{ height: 20, width: 20, marginRight: 15, marginTop: 17 }} source={require('../assets/icons/edit.png')} />
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
    }) 
  },
  Template: {   
    screen: Template,
    navigationOptions: ({ navigation }) => ({
      title: "Templates", 
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text> 
          </Text>
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
    })
  },
  PrivacyPolicy: {   
    screen: PrivacyPolicy,
    navigationOptions: ({ navigation }) => ({
      title: "Privacy Policy", 
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text> 
          </Text>
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
    })
  },
  Faq: {   
    screen: Faq,
    navigationOptions: ({ navigation }) => ({
      title: "FAQ’s",  
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text> 
          </Text>
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
    })
  },
  ContactUs: {   
    screen: ContactUs,
    navigationOptions: ({ navigation }) => ({
      title: "Contact Us",  
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text> 
          </Text>
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
    })
  },
  ReportIssue: {   
    screen: ReportIssue,
    navigationOptions: ({ navigation }) => ({
      title: "Report an Issue",  
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text> 
          </Text>
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
    })
  },
  Dashboard: {   
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: "Dashboard",          
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text> 
          </Text>
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
    })
  },
  DashboardJobDetails: {   
    screen: DashboardJobDetails,
    navigationOptions: ({ navigation }) => ({
      title: "Details",          
      headerLeft: (<View>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
        </TouchableOpacity>

      </View>
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  Notification: {   
    screen: Notification,
    navigationOptions: ({ navigation }) => ({
      title: "Notifications",  
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text> 
          </Text>
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
    })
  },
  CandidateProfile: {
    screen: CandidateProfile,
    navigationOptions: ({ navigation }) => ({      
      title: 'Profile Details',                        
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DashboardJobDetails')}>   
        <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
       </TouchableOpacity>     
        ),
      headerRight: ( 
        <View>
        <Text> 
        </Text>
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
    })
  },
  Message: {
    screen: Message,
    navigationOptions: ({ navigation }) => ({      
      title: 'Messages',                        
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DashboardJobDetails')}>   
        <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
       </TouchableOpacity>     
       ),
      headerRight: ( 
        <View>
        <Text> 
        </Text>
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
    })
  },
  Appointment: {
    screen: Appointment,
    navigationOptions: ({ navigation }) => ({   
      title: "Appointment",
      headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('DashboardJobDetails')}>   
      <Image style={{ width: 20, height: 20, marginTop: 17, marginLeft: 10 }} source={require('../assets/icons/left-arrow.png')} />
     </TouchableOpacity>     
      ),
      headerRight: (
        <View>
          <Text>
          </Text>
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
    })
  },
  PaymentStatus: {
    screen: PaymentStatus,
    navigationOptions: ({ navigation }) => ({      
      title: 'Payment Status',                        
      headerLeft: (<TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>
      ),
      headerRight: ( 
        <View>
        <Text> 
        </Text>
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
    })
  },
  Applicants: {
    screen: Applicants,
    navigationOptions: ({ navigation }) => ({      
      title: 'Applicants',                         
      headerLeft: (<TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>
      ),
      headerRight: ( 
        <View>
        <Text> 
        </Text>
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
    })
  },
  ChooseFilterCandidate: {
    screen: ChooseFilterCandidate,
    navigationOptions: ({ navigation }) => ({      
      title: 'Candidates Profile',                         
      headerLeft: (<TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>
      ),
      headerRight: ( 
        <View>
        <Text> 
        </Text>
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
    })
  },
  BrowseCandidate: {
    screen: BrowseCandidate,
    navigationOptions: ({ navigation }) => ({      
      title: 'Browse Candidates',                          
      headerLeft: (<TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Image style={{ height: 20, width: 20, marginLeft: 15, marginTop: 17 }} source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>
      ),
      headerRight: ( 
        <View>
        <Text> 
        </Text>
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
    })
  },
});

export default Drawerstack;