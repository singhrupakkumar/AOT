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
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

export default class EditRole extends Component {        
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

    Choosefile (){      
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.images()],
          },(error,res) => {
              if(error){
                
              }else{
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
        headerTitle: 'Job Post',       
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

                         <Text style={styles.heading}>Hospitality</Text>

                            <View style={styles.outercontainer}>  
                            <Text style={styles.heading1}>Manager</Text>
                            <View style={styles.mainrow}>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>Job Type</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="Full Time"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>Pay</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="Mininum $9"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>No. of Staff</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="12"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>Skills</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="Construction, Painting"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.fullsec}>
                                <Text style={styles.subhading}>Location</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="#123 lorem ipsum dolor"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>NI</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="$5"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>VAT</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="$12"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>Fee</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="$10"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.halfsec}>
                                <Text style={styles.subhading}>Sub Total</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="$120"
                                    placeholderTextColor="#D3D3D3"
                                    onChangeText={(cpassword) => this.setState({ cpassword })}
                                    value={this.state.cpassword}
                                />
                            </View>
                            <View style={styles.fullsec}>
                                <Text style={styles.subhading}>File Uploded</Text>
                                <TouchableOpacity onPress={()=>{this.Choosefile()}}>  
                                <Image style={{ width: 137, height: 70, borderRadius: 7, marginTop: 10}} source={require('../assets/icons/dummyimg.png')} />
                                </TouchableOpacity>   
                            </View>
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
    indicator: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    heading: {
      fontWeight:'500',
      color:'#747474',
      fontSize:15,
      textAlign:'left',
      width: '100%',
      marginBottom: 17
    },
    outercontainer:{
     backgroundColor:'#FFFFFF',
     borderRadius:10,
     elevation:4,
     padding: 10
    },
    container: {
        backgroundColor: '#fff',
        padding: 18,
        paddingTop: 100,

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
    mainrow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      halfsec: {
        width: '50%',
        paddingRight: 10,
        marginBottom: 15,
        marginTop: 5
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
      inputBox: {
          height: 28,
          padding: 0,
          color: '#747474'
      },
      heading1: {
        fontSize: 15,
        color: '#747474',
        fontWeight: '500',
        marginVertical: 10,
        textAlign: 'left',
        width: '100%'
      },

}); 