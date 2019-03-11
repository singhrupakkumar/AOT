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
import Textarea from 'react-native-textarea';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import HideView from '../Component/HideView';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

export default class ReportIssue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            isHidden: true,  
        };
        this.onDayPress = this.onDayPress.bind(this);
    }

    state = {
        email: '',
        password: ''
    }


    onDayPress(day) {  
        this.setState({ 
          selected: day.dateString,
          isHidden:true
        });
      }

      MyToggle(){
        if (this.state.isHidden == false) {
            this.setState({ 
                isHidden:true
              });
        }else{
            this.setState({ 
                isHidden:false 
              });  
        }
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

        headerLeft: null,
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
                <ScrollView>
                    <View style={styles.container}>

                        <StatusBar
                            barStyle="light-content" backgroundColor="transparent" translucent={true}
                        />


                        <View style={styles.lcontainer}>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Email/Mobile</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="Enter Email/Mobile"
                                    placeholderTextColor="#D3D3D3"
                                    keyboardType="email-address"
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email} />
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Job Role</Text>
                                <View style={styles.inputBox}>
                                    <Picker style={{ height: 40, width: '100%', marginLeft: -8, color: '#747474' }}
                                        selectedValue={this.state.jobrole}

                                        onValueChange={(itemValue, itemIndex) => this.setState({ jobrole: itemValue })}>
                                        <Picker.Item style={{ fontSize: 12, }} fontSize='1' label="Select job Role" value="" />
                                        <Picker.Item style={{ fontSize: 12, }} label="Manager" value="manager" />
                                        <Picker.Item style={{ fontSize: 12, }} label="Genral Manager" value="gm" />
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Date</Text>

                                <TextInput style={styles.inputBox1}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor="#D3D3D3"
                                    placeholder="Select Date"
                                    keyboardType="email-address"
                                    onChangeText={(selected) => this.setState({ selected })}
                                    value={this.state.selected} />
                                <TouchableOpacity style={styles.inputicn} onPress={() => { this.MyToggle() }}>
                                    <Image style={styles.inputicn1} source={require('../assets/icons/calendar.png')} />
                                </TouchableOpacity>

                            </View>

                            <View style={styles.calendarout}>
                                <HideView hide={this.state.isHidden}>
                                    <Calendar
                                        onPress={(value) => { this.setState({ isHidden: value }) }}
                                        markedDates={{ [this.state.selected]: { selected: true } }}
                                        onDayPress={this.onDayPress}
                                        style={{
                                            backgroundColor: '#5A1CE2',
                                            borderRadius: 5,
                                            alignSelf: 'flex-end',
                                            display: 'flex',
                                            marginBottom: 15,
                                            marginTop: -10
                                        }}
                                        theme={{
                                            calendarWidth: 200,
                                            calendarBackground: '#5A1CE2',
                                            textSectionTitleColor: '#b6c1cd',
                                            selectedDayBackgroundColor: '#9800C3',
                                            selectedDayTextColor: '#ffffff',
                                            todayTextColor: '#ffffff',
                                            todayBackgroundColor: '#9800C3',
                                            dayTextColor: '#ffffff',
                                            textDisabledColor: '#f2f2f2',
                                            dotColor: '#00adf5',
                                            selectedDotColor: '#ffffff',
                                            arrowColor: '#9800C3',
                                            monthTextColor: '#ffffff',
                                            textMonthFontWeight: 'bold',
                                            textDayFontSize: 10,
                                            textMonthFontSize: 12,
                                            textDayHeaderFontSize: 12
                                        }}

                                    />
                                </HideView>
                            </View>



                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Problem</Text>
                                <View style={styles.inputBox}>
                                    <Picker style={{ height: 40, width: '100%', marginLeft: -8, color: '#747474' }}
                                        selectedValue={this.state.shift}

                                        onValueChange={(itemValue, itemIndex) => this.setState({ shift: itemValue })}>
                                        <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Select Problem" value="" />
                                        <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Candidate is sick" value="Candidate is sick" />
                                        <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Candidate is Absent" value="Candidate is Absent" />
                                        <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Candidate is Late" value="Candidate is Late" />
                                        <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Candidate is not Qualified" value="Candidate is not Qualified" />
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.inputouter1}>
                                <Text style={styles.label1}>Reason</Text>

                                <Textarea
                                    containerStyle={styles.textareaContainer}
                                    style={styles.textarea}
                                    onChangeText={this.onChange}
                                    defaultValue={this.state.description}
                                    placeholder={'Mention Reason'}
                                    placeholderTextColor={'#D3D3D3'}
                                    underlineColorAndroid={'transparent'}
                                />
                            </View>




                            <TouchableOpacity onPress={this.handlePress.bind(this)}>
                                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </View>

                </ScrollView>



            );

        }
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
    textareaContainer: {
        height: 150,
        padding: 5,
        borderWidth: 1,
        borderColor: '#eeeeee',
        borderRadius: 5,
        width: width - 175,
        paddingTop: 0,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 150,
        fontSize: 14,
        color: '#747474',
    },
    selectBox: {
        padding: 20,
        borderColor: 'red',
        width: '100%'
    },
    buttonContainer: {
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        width: 200
    },
    inputBox1: {
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        width: width - 175,
        fontSize: 12,
        color: '#747474',
        paddingRight: 39
    },
    container: {
        backgroundColor: '#fff',
        padding: 18,
        paddingTop: 120,

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
    forgotText: {
        color: '#AC00BB',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 15
    },
    dontacc: {
        color: '#747474',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20,
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
        marginTop: 20,
    },
    lcontainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputouter: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    inputouter1: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    label1: {
        width: 140,
        fontSize: 13,
        color: '#747474',
        marginTop: 8
    },
    blurbg: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -50,
        bottom: -50,
        left: -50,
        right: -50,
    },
    inputBox: {
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        width: width - 175,
        fontSize: 12,
        color: '#747474',
    },
    label: {
        width: 140,
        fontSize: 13,
        color: '#747474',
    },
    inputicn: {
        position: 'absolute',
        height: 15,
        width: width - 175,
        right: 0,
        top: 12,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 12
    },
    inputicn1: {
        height: 15,
        width: 15,
    },
    signupbtn: {
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    signupText: {
        color: '#f0f',
    }
    ,
    alertcontainer: {
        backgroundColor: '#fff',
        width: 300,
        height: 120,
        borderRadius: 8,
        padding: 15,
    },
    suggtxt: {
        fontSize: 13,
        lineHeight: 20,
        color: '#747474',
        textAlign: 'center',
        paddingHorizontal: 5,
        marginTop: 11,
        marginBottom: 15
    },
    calendarout: {
        display: 'flex',
        justifyContent: 'flex-end',
        
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
});