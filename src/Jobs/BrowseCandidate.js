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
    
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient'; 
import HideView from '../Component/HideView';
import CheckBox from 'react-native-check-box'
const dimensions = Dimensions.get('window');
import Modal from "react-native-modal";
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import Textarea from 'react-native-textarea';
import { Rating, AirbnbRating } from 'react-native-ratings';   


export default class BrowseCandidate extends Component {
    constructor() {
        super();
        this.state = {
            ratingModal:false,
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



    render() {

       

        var paymentdata = [];

        for (let i = 1; i < 4; i++) {
     
            paymentdata.push(
                
                <View key={i} style={styles.mainrow}>
                    <View style={styles.leftcolum}>
                        <Text style={styles.nametxt}>John Doe</Text>
                        <View style={styles.adres}>
                            <Image style={styles.circle} source={require('../assets/icons/location.png')} />
                            <Text style={styles.greytext}>123, loremipsum, street, 12</Text>
                        </View>
                        <Text style={styles.greentxt}>Available</Text>
                        <View style={styles.moresec}>
                            <Text style={styles.skillstxt}>Skills:</Text>
                            <Text style={styles.moretxt}> lorem ipsum is a dummy text.....</Text>
                            <TouchableOpacity style={styles.morebtn}>
                                <Text style={styles.morebtntxt}>more</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomsection}>

                           <Rating
                             type='custom'
                            showRating={false}
                            onFinishRating={this.ratingCompleted}
                            style={{}}
                            imageSize={18}
                            ratingBackgroundColor='#c8c7c8'
                            />  
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CandidateProfile') }}>
                                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                    <Text style={styles.buttonText}>View Profile</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            )
        }


     

        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar
                        barStyle="light-content" backgroundColor="transparent" translucent={true}
                    />


                    <View style={styles.inputouter}>
                        <View style={styles.inputouter1}>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='transparent'
                                placeholder="Job name, Training etc.."
                                placeholderTextColor="#747474"
                                onChangeText={(searchval) => this.setState({ searchval })}
                                value={this.state.searchval}

                            />
                            <TouchableOpacity style={styles.srchimg} onPress={() => { this.searchaddress(this.state.searchval) }}>
                                <Image style={styles.srchimg1} source={require('../assets/icons/searchicon.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                  
                    <View style={{ marginTop: 20, }}>   
                        {paymentdata}
                    </View>
                

                </View>
             
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 17,
        flex: 1,

    },
    label: {
        width: 90,
        fontSize: 13,
        color: '#747474',
        marginTop: 10
    },
    oktxt: {
        color: '#AB00BB',
        fontWeight: '500',
        fontSize: 13,
        textAlign: 'center',
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
        alignSelf: 'center',
    },
    inputouter: {
        paddingBottom: 17,
        paddingTop: 50,
    },
    inputouter1: {
        height: 35,
        backgroundColor: 'rgba(204, 204, 204, 0.3)',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 50,
        paddingLeft: 15
    },
    srchimg: {
        height: 20,
        width: 20,
        position: 'absolute',
        top: 7,
        right: 15,
        margin: 'auto',
    },
    srchimg1: {
        height: 20,
        width: 20,
    },
    inputBox: {
        fontSize: 13,
        fontWeight: '500',
        color: '#747474',
        width: '100%',
        height: 35,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: -200,
        marginBottom: 60
    },
    info: {
        fontSize: 14,
        fontWeight: '500',
        color: 'grey',
        padding: 5
    },
    tab: {
        padding: 30,
        alignSelf: 'center'
    },
    mainrow: {
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 7,
        padding: 15,
        marginBottom: 20,
        position: 'relative'
    },
    chkbx: {
        position: 'absolute',
        right: 16,
        top: 16
    },
    leftcolum: {
        flex: 1,
        paddingRight: 7
    },
    bottomsection: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    strong: {
        fontSize: 13,
        color: '#000',
        marginVertical: 2,
    },
    greytext: {
        color: '#747474',
        fontSize: 13
    },
    p: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    themetext: {
        color: '#9C00C1',
        fontSize: 13
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
        width: 320,
        borderRadius: 8,
        padding: 15,
        position: 'relative'
      },
      alertcontainer1: {
        backgroundColor: '#fff',
        width: 300,
        borderRadius: 8,
        padding: 15,
        paddingTop: 25,
        position: 'relative'
      },
      headingmodl: {
          fontSize: 13,
          color: '#747474',
          textAlign: 'center'
      },
      starsec: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginVertical: 15
      },
      starimg: {
          width: 15,
          height: 15,
          marginHorizontal: 4
      },
      success:{
        color:'#5DE234',
        fontSize:13
      },
      error:{
        color:'#E2347E',
        fontSize:13
      },
      nametxt: {
          fontSize: 20,
          fontWeight: '500',
          color: '#000'
      },
      adres: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginVertical: 4
      },
      circle: {
          height: 18,
          width: 18,
          marginRight: 3
      },
      greentxt: {
          fontSize: 13,
          color: '#51C845',
      },
      moresec: {
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row'
      },
      skillstxt: {
        fontSize: 13,
        color: '#000',
        marginRight: 3
      },
      moretxt: {
          fontSize: 13,
          color: '#747474',
      },
      morebtntxt: {
          fontSize: 13,
          color: '#DE00A7',
          marginLeft: 3
      },
      mainbtn: {
          height: 37,
          width: 200,
          borderRadius: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20
      },
      mainbtntxt: {
          fontSize: 15,
          color: '#ffffff'
      }

}); 