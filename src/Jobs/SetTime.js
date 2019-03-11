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
import HideView from '../Component/HideView';
const dimensions = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;

var nextDays = []

export default class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            isHidden: true, 
            selectedStartDate: null,
            selectedEndDate: null, 
        };

        this.onDayPress = this.onDayPress.bind(this);  

       // this.onDateChange = this.onDateChange.bind(this);

    }


    
    onDayPress(day) {

        nextDays.push(day.dateString);  
      
          let newDaysObject = {};
      
          nextDays.forEach((day) => {
            newDaysObject = {
              ...newDaysObject,
              [day]: {
                selected: true,
                marked: true
              }
            };
          });
        this.setState({ 
          selected: newDaysObject,
        });
      }

      MyToggle(){
        this.setState({ selected: null })
        nextDays = [];
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
        headerTitle: 'Set Time',
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

                            <View style={styles.swichcontainer}>
                                <Text style={styles.days}>Multiple Days</Text>
                                <View style={{ marginHorizontal: 15 }}>
                                    <Switch
                                        value={this.state.isOn}
                                        onValueChange={(val) => this.setState({ isOn: val })}
                                        circleSize={21}
                                        barHeight={25}
                                        circleBorderWidth={0}
                                        backgroundActive={'#5A1CE2'}
                                        backgroundInactive={'gray'}
                                        circleActiveColor={'#fff'}
                                        circleInActiveColor={'#fff'}
                                        innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                        outerCircleStyle={{}} // style for outer animated circle
                                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                        switchWidthMultiplier={2.4} // multipled by the `circleSize` prop to calculate total width of the Switch
                                    />
                                </View>
                                <Text style={styles.range}>Date Range</Text>
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Select Shift</Text>
                                <View style={styles.inputBox}>
                                    <Picker style={{ height: 40, width: '100%', marginLeft: -8, color: '#747474' }}
                                        selectedValue={this.state.shift}

                                        onValueChange={(itemValue, itemIndex) => this.setState({ shift: itemValue })}>
                                        <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Morning" value="morning" />
                                        <Picker.Item style={{ fontSize: 12, color: '#747474' }} label="Evening" value="evening" />
                                    </Picker>
                                </View>
                            </View>


                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Start Date</Text>
                                
                                <TextInput style={styles.inputBox1}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor="#D3D3D3"
                                    keyboardType="email-address"
                                    onChangeText={(selected1) => this.setState({ selected1 })}
                                    value={this.state.selected1} />   
                                <TouchableOpacity style={styles.inputicn} onPress={() => { this.MyToggle() }}>        
                                <Image style={styles.inputicn1} source={require('../assets/icons/calendar.png')} />
                                </TouchableOpacity>
                                
                            </View>

                            <View style={styles.calendarout}>
                            <HideView hide={this.state.isHidden}>
                            <Calendar
                              onPress={(value) => { this.setState({ isHidden: value }) }}   
                              markedDates={this.state.selected}
                              onDayPress={this.onDayPress}
                               style={{
                                backgroundColor: '#5A1CE2',
                                borderRadius: 5,
                                alignSelf: 'flex-end',
                                display: 'flex',
                                marginBottom: 15,
                                marginTop: -10
                              }}
                               theme={{
                                calendarWidth: 200,
                                calendarBackground: '#5A1CE2',
                                textSectionTitleColor: '#b6c1cd',
                                selectedDayBackgroundColor: '#9800C3',  
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#ffffff',
                                todayBackgroundColor: '#9800C3',
                                dayTextColor: '#ffffff',
                                textDisabledColor: '#f2f2f2',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: '#9800C3',
                                monthTextColor: '#ffffff',
                                textMonthFontWeight: 'bold',
                                textDayFontSize: 10,
                                textMonthFontSize: 12,
                                textDayHeaderFontSize: 12
                              }}     
                                    
                            />
                            </HideView> 
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>Start Time</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="10:00 am"
                                    placeholderTextColor="#D3D3D3"
                                    keyboardType="email-address"
                                    onChangeText={(starttime) => this.setState({ starttime })}
                                    value={this.state.starttime} />
                            </View>

                            <View style={styles.inputouter}>
                                <Text style={styles.label}>End Time</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='transparent'
                                    placeholder="6:00 pm"
                                    placeholderTextColor="#D3D3D3"
                                    keyboardType="email-address"
                                    onChangeText={(endtime) => this.setState({ endtime })}
                                    value={this.state.endtime} />
                            </View>

                            <View style={styles.botmmenu}>
                                <Text style={styles.managertxt}>16-10-2018 - 20-10-2018 (10:00am - 6:00 pm)</Text>
                                <View style={styles.bottomimgout}>
                                    <TouchableOpacity style={{ width: 20, height: 20, marginHorizontal: 5 }} >
                                        <Image style={styles.moreimg} source={require('../assets/icons/jobpost/edit.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 20, height: 20, marginHorizontal: 5 }} >
                                        <Image style={styles.moreimg} source={require('../assets/icons/jobpost/error.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.botmmenu}>
                                <Text style={styles.managertxt}>14-10-2018 - 18-10-2018 (10:00am - 6:00 pm)</Text>
                                <View style={styles.bottomimgout}>
                                    <TouchableOpacity style={{ width: 20, height: 20, marginHorizontal: 5 }} >
                                        <Image style={styles.moreimg} source={require('../assets/icons/jobpost/edit.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 20, height: 20, marginHorizontal: 5 }} >
                                        <Image style={styles.moreimg} source={require('../assets/icons/jobpost/error.png')} />
                                    </TouchableOpacity>
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
    browsercontainer: {
        height: 122,
        width: 339,
        backgroundColor: '#EEEEEE'
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
        alignItems: 'center',
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
    inputBox1: {
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        width: width - 175,
        fontSize: 12,
        color: '#747474',
        paddingRight: 39
    },
    label: {
        width: 140,
        fontSize: 13,
        color: '#747474',
    },
    inputicn: {
        position: 'absolute',
        height: 15,
        width: width - 175,
        right: 0,
        top: 12,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 12
    },
    inputicn1: {
        height: 15,
        width: 15,
    },
    swichcontainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
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
        marginVertical: 10,
    },
    managertxt: {
        fontSize: 13,
        color: '#747474',
        flexWrap: 'wrap',
        display: 'flex',
        width: width - 140,
    },
    moreimg: {
        width: 20,
        height: 20,
    },
    bottomimgout: {
        display: 'flex',
        flexDirection: 'row',
    },
    calendarout: {
        display: 'flex',
        justifyContent: 'flex-end',
        
    }
}); 