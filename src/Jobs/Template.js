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
import HideView from '../Component/HideView';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import Panel from '../Component/Accordion_Panel';
import CheckBox from 'react-native-check-box'

export default class Template extends Component {
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

        var template = [];

        for(let i = 1; i < 5; i++){
    
            template.push(
              <LinearGradient key = {i} start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
        
                      <Text style={styles.buttonText}>Template {i}</Text>
                
              </LinearGradient>
            )
        }

        return (

            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content" backgroundColor="transparent" translucent={true}
                />
                <ScrollView style={styles.container}>
                    <View style={styles.container1}>    
                         {template} 
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
    whitebg:{
        backgroundColor:'#fff', 
        width: 298,
        borderRadius:10,
        height: 38,
        lineHeight: 38

    },
    container1: {
        padding: 18,
        paddingTop: 90,
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color:'#9500C4',
        backgroundColor:'#fff', 
        width: 298,
        borderRadius:10,
        height: 38,
        lineHeight: 38
    },
    btn: {
        width: 300,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    
}); 