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
import Modal from "react-native-modal";
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
  { label: 'Appointment', value: 0, borderBottomWidth: 1, },
  { label: 'Message', value: 1 },
];
export default class DashboardJobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmModal:false
        };

    }


    handlePress = async () => {
        this.setState({ alertModal: true })
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

    GoFormsg(){
        this.setState({ confirmModal: false});
        this.props.navigation.navigate('Message');

    }

    GoForAppointment(){
        this.setState({ confirmModal: false});
        this.props.navigation.navigate('Appointment');
    }

    static navigationOptions = {
        headerTitle: 'Details',
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
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

                <View style={styles.container}>
                    <StatusBar
                        barStyle="light-content" backgroundColor="transparent" translucent={true}
                    />
                    <ScrollView style={styles.container}>

                        <View style={styles.container1}>

                            <View style={styles.jobsection}>

                                    <View style={styles.mainrow}>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Industry</Text>
                                            <Text style={styles.detailtxt}>Hospitality</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Job Title</Text>
                                            <Text style={styles.detailtxt}>Manager</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Job Type</Text>
                                            <Text style={styles.detailtxt}>Lorem Ipsum</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Pay Type</Text>
                                            <Text style={styles.detailtxt}>Hourly</Text>
                                        </View>
                                 
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Pay</Text>
                                            <Text style={styles.detailtxt}>$40</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Exp. Required</Text>
                                            <Text style={styles.detailtxt}>2 years</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Overtime</Text>
                                            <Text style={styles.detailtxt}>2hrs</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Skills</Text>
                                            <Text style={styles.detailtxt}>Painting, carpentry</Text>
                                        </View>
                                        <View style={styles.fullsec}>
                                            <Text style={styles.subhading}>Date & Time</Text>
                                            <Text style={styles.detailtxt}>24-10-2018(8:00 am - 12:00pm)</Text>
                                        </View>
                                    </View>
                                </View>    
                              
                                <View style={styles.listingsection}>
                                    <Text style={styles.heading}>Employed Candidates</Text>
                                    
                                    <View style={styles.row}>
                                    <View style={styles.toprow}>
                                        <Text style={styles.accepttxt}>Accept</Text>
                                        <Text style={styles.rejecttxt}>Reject</Text>
                                    </View>
                                      <View style={styles.botmrow}>
                                        <Text style={styles.employname}>Employee 1</Text>
                                    
                                        <View style={styles.btnout}>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('CandidateProfile') }}>
                                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                                <Text style={styles.buttonText}>View Profile</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.setState({ confirmModal: true}) }}>
                                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                                <Text style={styles.buttonText}>Appt/Msg</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        </View>
                                    </View>
                                    </View>


                                      <View style={styles.row}>
                                    <View style={styles.toprow}>
                                        <Text style={styles.accepttxt}>Accept</Text>
                                        <Text style={styles.rejecttxt}>Reject</Text>
                                    </View>
                                      <View style={styles.botmrow}>
                                        <Text style={styles.employname}>Employee 2</Text>
                                    
                                        <View style={styles.btnout}>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('CandidateProfile') }}>
                                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                                <Text style={styles.buttonText}>View Profile</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.setState({ confirmModal: true}) }}>
                                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                                <Text style={styles.buttonText}>Appt/Msg</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        </View>
                                    </View>
                                    </View>
                                </View>
                          
                        </View>




                          <Modal isVisible={this.state.confirmModal} animationIn='slideInUp' animationOut='slideOutDown'>
                            <View style={styles.blurbg}>
                                <View style={styles.alertcontainer}>    
                                    <Text style={styles.suggtxt}>        
                                    Select your Options 
                                    </Text>
                                    <View style={styles.btnouter}>
                                    <TouchableOpacity style={styles.okbtn} onPress={() => this.GoForAppointment()} >  
                                        <Text style={styles.oktxt}>Appointment</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.nobtn} onPress={() => this.GoFormsg()} >
                                        <Text style={styles.notxt}>Message</Text>
                                    </TouchableOpacity> 
                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </ScrollView>
                </View>
            );

        }
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
    jobsection: {
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
    listingsection: {
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 7,
        padding: 15,
        marginTop: 25
    },
    buttonText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500'
    },
    btn: {
        width: 90,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginLeft: 10
    },
    heading: {
        fontWeight: '500',
        color: '#747474',
        fontSize: 15,
        textAlign: 'left',
        width: '100%',
        marginBottom: 10,
    },
    top_h2: {
        fontSize: 15,
        fontWeight: '500',
        color: '#747474',
        textAlign: 'center',
        marginTop: 8,
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
      alertcontainer: {
        backgroundColor: '#fff',
        width: 300,
        height: 120,
        borderRadius: 8,
        padding: 15,
        position: 'relative'
      },
      alertcontainer1: {
        backgroundColor: '#fff',
        width: 300,
        height: 170,
        borderRadius: 8,
        padding: 15,
        paddingTop: 25,
        position: 'relative'
      },
      btnouter: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#EEEEEE'
    },
    okbtn: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#eeeeee'
    },
    savetxt: {
      color: '#AB00BB',
      fontWeight: '500',
      fontSize: 13,
      textAlign: 'center',
      height: 42,
      lineHeight: 42,
    },
    savebtn: {
       flexGrow: 1
    },
    nobtn: {
      flex: 1
  },
  notxt: {
      color: '#5526E5',
      fontWeight: '500',
      fontSize: 13,
      textAlign: 'center',
      height: 42,
      lineHeight: 42
  },
    oktxt: {
      color: '#AB00BB',
      fontWeight: '500',
      fontSize: 13,
      textAlign: 'center',
      height: 42,
      lineHeight: 42
    },
    suggtxt: {
        fontSize: 13,
        color: '#747474',
        textAlign: 'center',
        lineHeight: 20
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
    suggtxt: {
        fontSize: 13,
        color: '#747474',
        textAlign: 'center',
        lineHeight: 20
    },
    fullsec: {
        width: '100%',
        paddingRight: 10,
        marginBottom: 15,
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
    btncontainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        paddingBottom: 40,
        paddingTop: 20
    },
    botmrow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    row: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 8
    },
    btnout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    employname: {
        fontSize: 15,
        color: '#747474',

    },
    toprow: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    accepttxt: {
        color: '#5DE234',
        fontSize: 15,
        fontWeight: '500',
        paddingRight: 8
    },
    rejecttxt: {
        color: '#ff0000',
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 8
    }
    
});  