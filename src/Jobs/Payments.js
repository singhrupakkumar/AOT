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

export default class Payments extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            alertModal: false,
        };

    }

    state = {
        email: '',
        password: ''
    }



    handlePress = async () => {
        this.setState({ alertModal: true })
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
        headerTitle: 'Payments',
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
                                <Text style={styles.label}>Rate P/h</Text>  

                                <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="$ 10" 
                                keyboardType="number-pad"
                                placeholderTextColor="#D3D3D3"
                                onChangeText={(rateph) => this.setState({ rateph })}
                                value={this.state.rateph} />
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>No. of Staff</Text> 
                                <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="8"
                                keyboardType="number-pad"
                                placeholderTextColor="#D3D3D3"
                                onChangeText={(nostaff) => this.setState({ nostaff })}
                                value={this.state.nostaff} />

                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Total Hours</Text>
     
                                <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="12"
                                keyboardType="number-pad"
                                placeholderTextColor="#D3D3D3"
                                onChangeText={(totalhours) => this.setState({ totalhours })}
                                value={this.state.totalhours} />
                            </View>


                            <View style={styles.inputouter}>
                                <Text style={styles.label}>NI</Text>
         
                                <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="3%"
                                placeholderTextColor="#D3D3D3"
                                keyboardType="number-pad"
                                onChangeText={(nival) => this.setState({ nival })}
                                value={this.state.nival} />
                   
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>VAT</Text>
                                <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="2%"
                                keyboardType="number-pad"
                                placeholderTextColor="#D3D3D3"
                                onChangeText={(vat) => this.setState({ vat })} 
                                value={this.state.vat} />
                            </View>

                              <View style={styles.inputouter}>
                                <Text style={styles.label}>Fee</Text>
                                <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="$200"
                                placeholderTextColor="#D3D3D3"
                                keyboardType="number-pad"
                                onChangeText={(fee) => this.setState({ fee })} 
                                value={this.state.fee} />
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Total Payment</Text>
                                <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="$10"
                                placeholderTextColor="#D3D3D3"
                                keyboardType="number-pad"
                                onChangeText={(totalpay) => this.setState({ totalpay })} 
                                value={this.state.totalpay} />
                            </View>


                            <TouchableOpacity style={{ marginTop: 10 }} onPress={this.handlePress.bind(this)}>
                                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                    <Text style={styles.buttonText}>Save</Text>
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
    term: {
        fontSize: 12,
        color: '#747474',
        marginLeft: 10
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
    socialicn: {
        width: 25,
        height: 25,
        marginLeft: 6,
        marginRight: 6,
    },
    social: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 18,
        marginBottom: 10,
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
    otptext: {
        fontSize: 13,
        lineHeight: 20,
        color: '#747474',
        textAlign: 'center',
        paddingHorizontal: 5,
        marginTop: 10
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