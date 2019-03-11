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
    ScrollView,
    Picker,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient'; 
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;


export default class Address extends Component {
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
        headerTitle: 'Add Address', 
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            flexGrow: 1,
            color: '#fff',
            marginTop: 80,
        },
    };


    state = {
        email: '',
        password: ''
    }
    handlePress = async () => {

        Alert.alert(
            '',
            'Saved successfully',
            [{ text: 'OK' }],
            { cancelable: false }
          );
        // alert(this.state.password)
        // fetch('http://104.248.120.98:3000/api/v1/users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'x-access-token': 'gjarogtvhyzbtfjymwfvhyqnrowtekdoboqkedvperrwbprift'
        //     },
        //     body: JSON.stringify({
        //         "email": 'dreamsanimationdev2@gmail.com',
        //         "password": 'future@123',
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         Alert.alert(responseJson.userdata.first_name);
        //         Actions.usernavigation()
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }



    render() {

        return (

            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content" backgroundColor="transparent" translucent={true}
                />
                <ScrollView style={styles.container}>
                    <View style={styles.container1}>
                        <Text style={styles.contheading}>Address</Text>
                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="Address 1"
                                placeholderTextColor="#D3D3D3"
                                onChangeText={(address) => this.setState({ address })}
                                value={this.state.address} />
                        </View>

                        <View style={styles.inputouter}>
                            <Text style={styles.label}></Text>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="Address 2"
                                placeholderTextColor="#D3D3D3"
                                keyboardType="email-address"
                                onChangeText={(address1) => this.setState({ address1 })}
                                value={this.state.address1} />
                        </View>

                        <View style={styles.inputouter}>
                            <Text style={styles.label}>City</Text>
                            <View style={styles.inputBox}>
                                <Picker style={{ height: 40, width: '100%', marginLeft: -8, color: '#747474' }}
                                    selectedValue={this.state.city}

                                    onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>
                                    <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Select City" value="" />
                                    <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="New Work" value="usa" />
                                    <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Washington" value="washington" />
                                </Picker> 
                            </View>
                        </View>



                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Post Code</Text>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="160011"
                                placeholderTextColor="#D3D3D3"
                                onChangeText={(postalcode) => this.setState({ postalcode })}
                                value={this.state.postalcode}
                            />
                        </View>

                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Country</Text>
                            <View style={styles.inputBox}>
                                <Picker style={{ height: 40, width: '100%', marginLeft: -8, color: '#747474' }}
                                    selectedValue={this.state.country}

                                    onValueChange={(itemValue, itemIndex) => this.setState({ country: itemValue })}>
                                    <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Select Country" value="" />
                                    <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="USA" value="usa" />
                                    <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="UK" value="uk" />
                                </Picker>
                            </View>
                        </View> 



                        <TouchableOpacity style={{ marginTop: 10 }} onPress={this.handlePress.bind(this)}>  
                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                <Text style={styles.buttonText}>Save</Text>
                            </LinearGradient>
                        </TouchableOpacity>
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
    imgsec: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 44,
    },
    imgwrapper: {
        width: 104,
        height: 98,
        borderRadius: 8,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(138, 0, 200, 0.15)'
    },
    imgout: {
        width: 104,
        height: 98,
        position: 'relative',

    },
    camerabtn: {
        position: 'absolute',
        bottom: 0,
        right: -10,
        height: 20,
        width: 20
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
    inputBox: {
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        width: width - 175,
        fontSize: 12,
        color:'#747474',
    },
    label: {
        width: 140,
        fontSize: 13,
        color: '#747474',
    },
    inputsec: {
        paddingBottom: 10,
        borderColor: '#D3D3D3',
        borderBottomWidth: 1,
    },
    linksec: {
        display: 'flex',
        height: 52,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#D3D3D3',
        flexDirection: 'row'
    },
    maintxt: {
        fontSize: 15,
        fontWeight: '500',
        color: '#747474'
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
        marginTop: 10,
    },
    contheading: {
        fontSize: 15,
        fontWeight: '500',
        color: '#747474',
        paddingBottom: 15,
    }
});