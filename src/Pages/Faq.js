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
import HideView from '../Component/HideView';
import Panel from '../Component/Accordion_Panel';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

export default class Faq extends Component {
    constructor(props) { 
        super(props);
    }

    state = {
        email: '',
        password: ''
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

        var template = [];

        for (let i = 1; i < 5; i++) {

            template.push(
                <Panel style={styles.acchead} key={i} title={"Q."+i+"    Lorem Ipsum Dolor sit Amet?"}> 
                    <View style={styles.address}>
                        <Text style={styles.ans}>Ans.</Text>
                        <Text style={styles.addtxt}>Lorem ipsum dolor sit amet, has oblique apeirian ut, eu ullum mollis forensibus sed, ex has viris nominati. Alii definitionem conclusionemque ut mel,</Text>
                    </View>    
                </Panel>
            )
        }

        return (

        <ScrollView>
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content" backgroundColor="transparent" translucent={true}
                />
                

                    <View style={styles.container1}>

                        <View style={styles.accordiansec}>
                            {template}
                        </View>
                    </View>
               
            </View>
            </ScrollView>

        );

    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      },
    container1: {
        padding: 18,
        paddingTop: 60,
    },
    ans: {
        color: '#000000',
        fontSize: 15,
        position: 'absolute',
        top: -1,
        left: 0,

    },

    addtxt: {
        color: '#747474',
        fontSize: 13,
        lineHeight: 20,
    },
    acchead: {
        color: '#000000',
        borderRadius: 20,
        padding: 20,
        fontSize: 15,
        fontWeight: '500'
    },
    address: {
       position: 'relative',
       paddingLeft: 40, 
    },
    subhading: {
        fontSize: 13,
        lineHeight: 17,
        color: '#000'
    },
}); 