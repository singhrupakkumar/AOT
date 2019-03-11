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
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

export default class Skills extends Component {
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
        headerTitle: 'Skills',
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
                        <View style={styles.topsec}>
                            <Text style={{ fontWeight: '500',marginTop: 80, marginBottom: 20, color: '#000000', fontSize: 14, textAlign: 'left', width: '100%' }}>Skills Required</Text>
                           
                            <View style={styles.checkout}>
                                <CheckBox
                                    style={{ marginLeft: -2 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked1: !this.state.isChecked1
                                        })
                                    }}
                                    isChecked={this.state.isChecked1}
                                    checkBoxColor='#A6A6A6'
                                    checkedCheckBoxColor='#8000CD'
                                />
                                <Text style={styles.term}>Carpenters construct and repair building structures </Text>
                            </View>

                               <View style={styles.checkout}>
                                <CheckBox
                                    style={{ marginLeft: -2 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked2: !this.state.isChecked2
                                        })
                                    }}
                                    isChecked={this.state.isChecked2}
                                    checkBoxColor='#A6A6A6'
                                    checkedCheckBoxColor='#8000CD'
                                />
                                <Text style={styles.term}>Tend to your creature comforts</Text>
                            </View> 

                                      <View style={styles.checkout}>
                                <CheckBox
                                    style={{ marginLeft: -2 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked3: !this.state.isChecked3
                                        })
                                    }}
                                    isChecked={this.state.isChecked3}
                                    checkBoxColor='#A6A6A6'
                                    checkedCheckBoxColor='#8000CD'
                                />
                                <Text style={styles.term}>Construction</Text>     
                            </View>    
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

    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        width: 200
    },
    container: { 
        backgroundColor: '#fff',
        paddingBottom: 18,
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
    inputouter: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        padding: 18,
        marginTop: 5
    },
    label: {
        width: 140,
        fontSize: 13,
        color: '#747474',
        marginTop: 8
    },
    term: {
        fontSize: 13,
        color: '#747474',
        paddingLeft: 16,
    },
    checkout: {
        display: 'flex', 
        alignItems: 'center', 
        flexGrow: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        width: '100%',
        marginBottom: 10
    },
    topsec: {
        padding: 18,
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        paddingBottom: 9,
    }
}); 