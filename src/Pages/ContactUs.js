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
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
        };

    }


    showhide() {
        if (this.state.isHidden == true) {
            this.setState({ isHidden: false });
        } else {
            this.setState({ isHidden: true });
        }
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
                        <View style={styles.logocontainer}>
                           <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.text}> 
                            Email ID: Johndoe@gmail.com
                            </Text>
                            <Text style={styles.text}>
                            Support Number: +1234567890 
                            </Text>        

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
        width: '100%',
        position: 'relative'
    },
    logo:{
        alignSelf:'center',
        marginBottom:10
    },
    container1: {
        padding: 18,
        paddingTop: 90,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 20,
        marginTop:5,
        color:'#747474',
    },
    details: {
        alignSelf: 'center',
        marginTop: 20,
        elevation: 3,
        color: '#747474',
        backgroundColor:'#fff',
        borderRadius: 8,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 15,
        paddingRight: 15,
        width:'100%'
    },
    
}); 