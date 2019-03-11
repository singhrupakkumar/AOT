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
    Picker,
    TextInput,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Switch } from 'react-native-switch';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CheckBox from 'react-native-check-box'
import HideView from '../Component/HideView';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            isHidden: true,  
        };
    }

    state = {
        email: '',
        password: ''
    }

    onDayPress(day) { 
        this.setState({ 
          selected: day,
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
        this.setState({ alertModal: true })
        Alert.alert(
            '',
            'Saved successfully',
            [{ text: 'OK' }],
            { cancelable: false }
        );
        this.props.navigation.navigate('DashboardJobDetails');     
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
    };

    render() {
        var shift = 0 ;

        var template = [];

        for(let i = 1; i < 5; i++){
    
            template.push(
              <LinearGradient key = {i} start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
        
                      <Text style={styles.buttonText}>Template {i}</Text>
                
              </LinearGradient>
            )
        }

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

                            <View style={styles.calendarout}>

                            <Calendar
                              onPress={(value) => { this.setState({ isHidden: value }) }} 
                              markedDates={{[this.state.selected+'ffff']: {selected: true}}}
                              dayComponent={({date, state}) => {
                                  var daterange = [1,2,3,4,5];
                                  var incl = daterange.includes(date.day); 
                                  if(incl == true){ 
                                    return (<View style={{flex: 1}}><TouchableOpacity onPress={()=>{this.onDayPress(date.dateString)}}><Text style={styles.shift}>M/E</Text><Text style={{textAlign: 'center', color: state === 'disabled' ? '#747474' : '#747474'}}> {date.day}</Text></TouchableOpacity></View>);
                                  }else{
                                    return (<View style={{flex: 1}}><TouchableOpacity onPress={()=>{this.onDayPress(date.dateString)}}><Text style={{textAlign: 'center', color: state === 'disabled' ? '#747474' : '#747474'}}> {date.day}</Text></TouchableOpacity></View>);
                                  }
                               
                              }}    
                               style={{
                                backgroundColor: '#5A1CE2', 
                                borderRadius: 5,
                                display: 'flex',
                                marginBottom: 15,
                                marginTop: -10,
                                paddingLeft: 0,
                                paddingRight: 0
                              }}
                               theme={{
                                calendarWidth: 400, 
                                calendarBackground: '#f9f9f9',
                                textSectionTitleColor: '#b6c1cd',
                                selectedDayBackgroundColor: '#9800C3',  
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#ffffff',
                                todayBackgroundColor: '#9800C3',
                                dayTextColor: '#ccc',
                                textDisabledColor: '#f2f2f2',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ccc',
                                arrowColor: '#9800C3',
                                monthTextColor: '#ccc',
                                textMonthFontWeight: 'bold',
                                textDayFontSize: 10,
                                textMonthFontSize: 12,
                                textDayHeaderFontSize: 12
                              }}     
                                    
                            />

                            <View style={styles.bottomsec}>
                              <Text style={styles.bottomhead}>{this.state.selected}</Text>
                              <Text style={styles.bottomsubhead}>Edit the shift Timings</Text>
                              <View style={styles.radiosec}>
                       
                           
                           
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
                                <Text style={styles.term}>Morning: 8:00-12:00</Text>
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
                                <Text style={styles.term}>Afternoon: 12:00-5:00</Text>
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
                                <Text style={styles.term}>Evening: 5:00-11:00</Text>     
                            </View>  

                                  <View style={styles.checkout}>
                                <CheckBox
                                    style={{ marginLeft: -2 }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked4: !this.state.isChecked4
                                        })
                                    }}
                                    isChecked={this.state.isChecked4}
                                    checkBoxColor='#A6A6A6'
                                    checkedCheckBoxColor='#8000CD'
                                />
                                <Text style={styles.term}>Night Shift</Text>     
                            </View>    
                 
                              </View>
                            </View>
                          
                            </View>
                            <TouchableOpacity style={{ marginTop: 10 }} onPress={this.handlePress.bind(this)}>
                                <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                    <Text style={styles.buttonText}>Save Changes</Text>
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
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        width: 200
    },
    container: {
        backgroundColor: '#fff',
        padding: 18,
        paddingTop: 80,

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


    calendarout: {
        display: 'flex',
        width:'100%'
        
    },
    shift:{
     backgroundColor:'#5526E5',
     color:'#fff',
     paddingVertical:2,
     fontSize: 11,
     paddingHorizontal: 6
    },
    bottomhead: {
        fontSize: 12,
        fontWeight: '500',
        color: '#747474',
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    bottomsec: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginTop: 15
    },
    bottomsubhead: {
        fontSize: 14,
        fontWeight: '500',
        color: '#747474',
        marginTop: 15,
        marginBottom: 8
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
}); 