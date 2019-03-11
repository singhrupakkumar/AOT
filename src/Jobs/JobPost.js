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
import Modal from "react-native-modal";           
import CheckBox from 'react-native-check-box'

export default class JobPost extends Component { 
    constructor(props) {     
        super(props);       
        this.state = { 
          isHidden: true,
          confirmModal: false, 
          templatenameModal:false    
       };  
         
      }


      showhide(){
        if(this.state.isHidden==true){  
            this.setState({ isHidden: false });
        }else{
            this.setState({ isHidden: true });  
        }  
      }

      editbtn(){
        this.props.navigation.navigate('EditRole')   ; 
      }
      DeleteBtn(){
        
        Alert.alert(
            '',
            'Are you sure you want to delete?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
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
        headerTitle: 'Job Post',
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

    savetemplate(){
        this.setState({ templatenameModal: false })     
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
                  <TouchableOpacity style={styles.plusouter}>
                            <Image style={styles.plus} source={require('../assets/icons/jobpost/plus.png')} />
                  </TouchableOpacity>
                <ScrollView style={styles.container}>
                    <View style={styles.container1}>
                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Job Details</Text> 
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('JobDetails') }}>
                            <Image style={styles.socialicn} source={require('../assets/icons/jobpost/right-arrow.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Location</Text> 
                             <TouchableOpacity onPress={() => { this.props.navigation.navigate('Location') }}>
                              <Image style={styles.socialicn} source={require('../assets/icons/jobpost/right-arrow.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Skills</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Skills') }}>   
                            <Image style={styles.socialicn} source={require('../assets/icons/jobpost/right-arrow.png')} />
                            </TouchableOpacity>
                        </View>



                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Date and Time</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SetTime') }}>   
                            <Image style={styles.socialicn} source={require('../assets/icons/jobpost/right-arrow.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Upload File</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('UploadFile') }}> 
                            <Image style={styles.socialicn} source={require('../assets/icons/jobpost/right-arrow.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputouter}>
                            <Text style={styles.label}>Payment Breakdown</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Payments') }}> 
                            <Image style={styles.socialicn} source={require('../assets/icons/jobpost/right-arrow.png')} />
                            </TouchableOpacity> 
                        </View>

                        <View style={{ flexDirection: 'column' }}>   
                            <View style={{ flexDirection: 'row' }}>

                                <CheckBox
                                    style={{ flex: 1, marginTop: 13, marginLeft: -2 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked: !this.state.isChecked,
                                            confirmModal: true  
                                        })
                                    }}
                                    isChecked={this.state.isChecked}
                                    rightText={"Save as a Template"}
                                    checkBoxColor='#A6A6A6'
                                    checkedCheckBoxColor='#8000CD' 
                                    rightTextStyle={{
                                        fontSize: 13,
                                        color: '#AD00BA'
                                    }}
                                />

                            </View>
                        </View>
 
                        <TouchableOpacity style={{ marginTop: 10 }} onPress={this.handlePress.bind(this)}>
                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                <Text style={styles.buttonText}>Save</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                                
                        <Text style={styles.roletxt}>Saved Roles:</Text>
   
                        <View style={styles.botmmenu}>
                            <Text style={styles.managertxt}>General manager</Text>
                            <View style={styles.btnout}>
                                <TouchableOpacity style={styles.btnimgout} onPress={()=>{this.editbtn()}}> 
                                   <Image style={styles.btnimg} source={require('../assets/icons/jobpost/edit.png')} /> 
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnimgout} onPress={() => {this.DeleteBtn()}}>
                                   <Image style={styles.btnimg} source={require('../assets/icons/jobpost/rubbish-bin.png')}/> 
                                </TouchableOpacity>
                            </View>
                          

                        </View>
                        <TouchableOpacity style={styles.nextbtn} onPress={()=>{ this.props.navigation.navigate('JobSummary')}}>
                        <Image style={styles.nextimg} source={require('../assets/icons/jobpost/arrow.png')} />         
                        </TouchableOpacity>        
                        </View>


                          <Modal isVisible={this.state.confirmModal} animationIn='slideInUp' animationOut='slideOutDown'>
                            <View style={styles.blurbg}>
                                <View style={styles.alertcontainer}>    
                                    <Text style={styles.suggtxt}>        
                                    Are you sure you want to save this as a template?
                                    </Text>
                                    <View style={styles.btnouter}>
                                    <TouchableOpacity style={styles.okbtn} onPress={() => this.setState({ confirmModal: false, templatenameModal: true })} >
                                        <Text style={styles.oktxt}>Yes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.nobtn} onPress={() => this.setState({ confirmModal: false,isChecked:false})} >
                                        <Text style={styles.notxt}>No</Text>
                                    </TouchableOpacity> 
                                    </View>
                                </View>
                            </View>
                        </Modal>


                        <Modal isVisible={this.state.templatenameModal} animationIn='slideInUp' animationOut='slideOutDown'>
                            <View style={styles.blurbg}>
                                <View style={styles.alertcontainer1}>
                                    <Text style={styles.suggtxt}>
                                    Template Name  
                                    </Text>  

                                    <View style={styles.inputouter}>
                                        <Text style={styles.label}>Name</Text>
                                        <TextInput style={styles.inputBox}
                                        underlineColorAndroid='transparent'
                                        placeholder="Enter Template Name"    
                                        placeholderTextColor="#D3D3D3"
                                        onChangeText={(tname) => this.setState({ tname })}
                                        value={this.state.tname}
                                        />
                                    </View>
                                    <View style={styles.btnouter}>
                                    <TouchableOpacity style={styles.savebtn} onPress={() => this.savetemplate()} >      
                                        <Text style={styles.savetxt}>Save</Text> 
                                    </TouchableOpacity>   
                                    </View>
                                </View>
                            </View>
                        </Modal>
                   
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
    plusouter: {
        position: 'absolute',
        right: 30,
        top: 25,
        height: 35,
        width: 35,
        zIndex: 9
    },
    container1: {
        padding: 18,
        paddingTop: 90,
    },
    inputouter: {  
        display: 'flex',
        height: 52,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        flexDirection: 'row' 
    }, 
    outerplus:{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',   
        flexDirection: 'row'     

    },
    label: {
        fontSize: 15,
        color: '#747474',
        fontWeight: '500'
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
    socialicn: {
        width: 25,
        height: 25,
        marginLeft: 6,
        marginRight: 6,
    },
    plus: {  
        width: 35,
        height: 35,
        marginRight: 10,
    },
    roletxt: {
        fontSize: 15,
        color: '#747474',
        marginBottom: 22,
        fontWeight: '500',
        marginTop: 40
    },
    botmmenu: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        elevation: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5,
        height: 51,
        position: 'relative'
    },
    managertxt: {
        fontSize: 15,
        fontWeight: '500',
        color: '#747474'
    },
    moreimg: {
        width: 20,
        height: 20,
        marginRight: -5
    },
    nextbtn:{
        width: 35,
        height: 35,
        display: 'flex',
        alignSelf: 'flex-end',
        marginTop: 35,
        zIndex: 11
    },
    nextimg: {
        width: 35,
        height: 35,
    },
    btnout: {
      display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btntxt: {
        fontSize: 13,
        color: '#747474',
        marginLeft: 8
    },
    btnimg: {
        height: 20,
        width: 20,
        marginLeft: 13
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
      btnouter: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#EEEEEE'
    },
    okbtn: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#eeeeee'
    },
    savetxt: {
      color: '#AB00BB',
      fontWeight: '500',
      fontSize: 13,
      textAlign: 'center',
      height: 42,
      lineHeight: 42,
    },
    savebtn: {
       flexGrow: 1
    },
    nobtn: {
      flex: 1
  },
  notxt: {
      color: '#5526E5',
      fontWeight: '500',
      fontSize: 13,
      textAlign: 'center',
      height: 42,
      lineHeight: 42
  },
    oktxt: {
      color: '#AB00BB',
      fontWeight: '500',
      fontSize: 13,
      textAlign: 'center',
      height: 42,
      lineHeight: 42
    },
    suggtxt: {
        fontSize: 13,
        color: '#747474',
        textAlign: 'center',
        lineHeight: 20
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
}); 