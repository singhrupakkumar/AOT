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
import CheckBox from 'react-native-check-box'
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import Panel from '../Component/Accordion_Panel';
import HideView from '../Component/HideView';
export default class JobSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmModal: false, 
            templatenameModal:false
        };

    }

    state = {
        email: '',
        password: ''
    }

    Gotocandidate(){
        this.setState({ OtpModal: false })
        this.props.navigation.navigate('ChooseFilterCandidate'); 
    }
    GotocandidateBrow(){
        this.setState({ OtpModal: false })
        this.props.navigation.navigate('BrowseCandidate');  
    }
    Choosefile() {
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.images()],
        }, (error, res) => {
            if (error) {

            } else {
                // Android
                console.log(
                    res.uri,
                    res.type, // mime type
                    res.fileName,
                    res.fileSize
                );
            }

        });
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

    static navigationOptions = {
        headerTitle: 'Job Summary',
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditRole')}>
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
                            <Text style={styles.heading}>Hospitality</Text>
                            <View style={styles.accordiansec}>

                                <Panel style={styles.acchead} title="General manager">
                                    <View style={styles.mainrow}>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Job Type</Text>
                                            <Text style={styles.detailtxt}>Full Time</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Pay Type</Text>
                                            <Text style={styles.detailtxt}>Hourly</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>No. of Staff</Text>
                                            <Text style={styles.detailtxt}>12</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Skills</Text>
                                            <Text style={styles.detailtxt}>Painting</Text>
                                        </View>
                                        <View style={styles.fullsec}>
                                            <Text style={styles.subhading}>Location</Text>
                                            <Text style={styles.detailtxt}>lorem ipsum 123</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Total Hours</Text>
                                            <Text style={styles.detailtxt}>8 hrs</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Rate</Text>
                                            <Text style={styles.detailtxt}>$20</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Start Date</Text>
                                            <Text style={styles.detailtxt}>18-01-2019</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>End Date</Text>
                                            <Text style={styles.detailtxt}>18-01-2019</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>NI</Text>
                                            <Text style={styles.detailtxt}>$5</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>VAT</Text> 
                                            <Text style={styles.detailtxt}>$12</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Fee</Text>
                                            <Text style={styles.detailtxt}>$10</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Sub Total</Text>
                                            <Text style={styles.detailtxt}>$200</Text>
                                        </View>
                                    </View>
                                </Panel>

                                <Panel style={styles.acchead} title="Payment">
                                    <View style={styles.mainrow}>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Total VAT</Text>
                                            <Text style={styles.detailtxt}>$12</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Total NI</Text>
                                            <Text style={styles.detailtxt}>$5</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Total Fees</Text>
                                            <Text style={styles.detailtxt}>$200</Text>
                                        </View>
                                        <View style={styles.halfsec}>
                                            <Text style={styles.subhading}>Total Payment</Text>
                                            <Text style={styles.detailtxt}>$300</Text>
                                        </View>
                                    </View>
                                </Panel>


                            </View>

                            <View style={{ display: 'flex', alignItems: 'center', flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', marginTop: 15 }}>
                                <CheckBox
                                    style={{ marginLeft: -2 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked: !this.state.isChecked
                                        })
                                    }}
                                    isChecked={this.state.isChecked}
                                    checkBoxColor='#A6A6A6'
                                    checkedCheckBoxColor='#8000CD'
                                />
                                <TouchableOpacity onPress={() => {
                                    Actions.termconditions()
                                }}>
                                    <Text style={styles.term}>I agree to Terms and Conditions</Text>
                                </TouchableOpacity> 
                            </View>
                            <TouchableOpacity onPress={() => this.setState({ OtpModal: true })} >
                                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>



                        <Modal isVisible={this.state.OtpModal} animationIn='slideInUp' animationOut='slideOutDown'>
                            <View style={styles.blurbg1}>
                                <View style={styles.btncontainer}>
                                    <TouchableOpacity onPress={() =>console.log('click')} >
                                        <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>

                                            <Text style={styles.buttonText}>Let Seleckt choose workers</Text>

                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.Gotocandidate()} >
                                        <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>

                                            <Text style={styles.buttonText}>Offer to available workers</Text>

                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.GotocandidateBrow()} >  
                                        <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>

                                            <Text style={styles.buttonText}>Browse and choose workers</Text>

                                        </LinearGradient>
                                    </TouchableOpacity>

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
    term: {
        fontSize: 13,
        color: '#9C00C1',
        marginLeft: 8
    },
    inputouter: {  
        display: 'flex',
        position: 'relative',
        width: '100%',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
      },
    inputBox: {
        height: 36,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        width: 190,
        fontSize: 12,
        color:'#747474',
      },
      label: {
        width: 80,
        fontSize: 13,
        color: '#747474',
      },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    btn: {
        width: '70%',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    heading: {
        fontWeight: '500',
        color: '#747474',
        fontSize: 15,
        textAlign: 'left',
        width: '100%',
        marginBottom: 0
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
    }
});  