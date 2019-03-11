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
import { Rating, AirbnbRating } from 'react-native-ratings';   
const dimensions = Dimensions.get('window');
import Modal from "react-native-modal";
const { height, width } = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 33);
const imageWidth = dimensions.width;
import SegmentControl from 'react-native-segment-controller';
import Textarea from 'react-native-textarea';


export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            tabIndex: 0,
            ratingModal:false
        }
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(index) {
        // this.setState({ content: `Segment ${index + 1} selected !!!`, index});
        this.setState({ tabIndex: index });
    }

    ratingCompleted(rating) { 
        console.log("Rating is: " + rating)
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

        var maintab = [];
        var tabdata1 = [];
        maintab[0] = tabdata1;
        for (let i = 1; i < 5; i++) {

            tabdata1.push(
                <View key={i} style={styles.mainrow}>
                    <View style={styles.leftcolum}>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Job:</Text>
                            <Text style={styles.greytext}>Painting</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Location:</Text>
                            <Text style={styles.greytext}>chd</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Pay type:</Text>
                            <Text style={styles.greytext}>Hourly</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Onsite/Offsite</Text>
                        </View>

                    </View>
                    <View style={styles.rightcolum}>
                        <Text style={styles.themetext}>
                            Hiring Status 6/10
                    </Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('DashboardJobDetails') }}>
                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                <Text style={styles.buttonText}>Job Detail</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

        var tabdata2 = [];
        maintab[1] = tabdata2;
        for (let i = 1; i < 5; i++) {

            tabdata2.push(
                <View key={i} style={styles.mainrow}>
                    <View style={styles.leftcolum}>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Job:</Text>
                            <Text style={styles.greytext}>Painting</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Location:</Text>
                            <Text style={styles.greytext}>chd</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Pay type:</Text>
                            <Text style={styles.greytext}>Hourly</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Onsite/Offsite</Text>
                        </View>

                    </View>
                    <View style={styles.rightcolum1}>
                
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('DashboardJobDetails') }}>
                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                <Text style={styles.buttonText}>Job Detail</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }


        var tabdata3 = [];
        maintab[2] = tabdata3;
        for (let i = 1; i < 5; i++) {

            tabdata3.push(
                <View key={i} style={styles.mainrow}>
                    <View style={styles.leftcolum}>
                        <View style={styles.p}>
                            <Text style={styles.strong}>Job:</Text>
                            <Text style={styles.greytext}>Painting</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Location:</Text>
                            <Text style={styles.greytext}>chd</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Pay type:</Text>
                            <Text style={styles.greytext}>Hourly</Text>
                        </View>

                        <View style={styles.p}>
                            <Text style={styles.strong}>Onsite/Offsite</Text>
                        </View>



                    </View>
                    <View style={styles.rightcolum}>
                        <TouchableOpacity onPress={() => { this.setState({ratingModal:true})}}>
                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                <Text style={styles.buttonText}>Rate Now</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('DashboardJobDetails') }}>
                            <LinearGradient start={{ x: -0.5, y: 1.0 }} end={{ x: 1.3, y: 1.0 }} colors={['#DE00A7', '#8000CD', '#4637EE']} style={styles.btn}>
                                <Text style={styles.buttonText}>Job Detail</Text>
                            </LinearGradient>
                        </TouchableOpacity>
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
                                placeholder="job name, type"
                                placeholderTextColor="#747474"
                                onChangeText={(searchval) => this.setState({ searchval })}
                                value={this.state.searchval}

                            />
                            <TouchableOpacity style={styles.srchimg} onPress={() => { this.searchaddress(this.state.searchval) }}>
                                <Image style={styles.srchimg1} source={require('../assets/icons/searchicon.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <SegmentControl
                            values={['Jobs posted', 'Ongoing', 'Completed']}
                            badges={[0, 0, 0]}
                            selectedIndex={this.state.tabIndex}
                            height={30}
                            onTabPress={this.handlePress}
                            tabsContainerStyle={{
                                width: '80%'
                            }}
                            tabStyle={{
                                borderBottomColor: '#000000',
                                borderBottomWidth: 1,
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                marginHorizontal: 10,
                                borderColor: 'transparent'
                            }}
                            activeTabStyle={{
                                backgroundColor: 'transparent',
                                borderBottomColor: '#B800B6'
                            }}
                            activeTabTextStyle={{
                                color: '#B800B6'
                            }}
                            tabTextStyle={{
                                color: '#000'
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 20, }}>
                        {maintab[this.state.tabIndex]}
                    </View>

                </View>



                <Modal isVisible={this.state.ratingModal} animationIn='slideInUp' animationOut='slideOutDown'>
                    <View style={styles.blurbg}> 
                        <View style={styles.alertcontainer}>
                            <Text style={styles.headingmodl}>
                                Rate candidate for this job
                             </Text>
                             <View style={styles.starsec}>
                       
                             <AirbnbRating count={5} defaultRating={0} 
                             reviews={["Terrible", "Bad", "Go", "Good", "Very Good"]}
                             size={20} onFinishRating={this.ratingCompleted}
                             style={{ paddingVertical: 100 }}
                             />     
                             </View>
                             <View style={styles.inputouter2}>
                                <Text style={styles.label}>Description</Text>

                                <Textarea
                                    containerStyle={styles.textareaContainer}
                                    style={styles.textarea}
                                    onChangeText={this.onChange}
                                    defaultValue={this.state.description}
                                    placeholder={'Description'}
                                    placeholderTextColor={'#D3D3D3'}
                                    underlineColorAndroid={'transparent'}
                                />
                            </View>
                          
                                <TouchableOpacity style={styles.nobtn} onPress={() => this.setState({ratingModal:false})} >
                                    <Text style={styles.oktxt}>Submit</Text>
                                </TouchableOpacity>
                           
                        </View>
                    </View>
                </Modal>
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
    textareaContainer: {
        height: 100,
        padding: 5,
        borderWidth: 1,
        borderColor: '#eeeeee',
        borderRadius: 5,
        width: width - 220,
        paddingTop: 0,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 100,
        fontSize: 14,
        color: '#747474',
    },
    inputouter2: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 45,
        marginTop: 10
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
        marginTop: 20,
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
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 7,
        padding: 15,
        marginBottom: 20
    },
    leftcolum: {
        flex: 1,
        paddingRight: 7
    },
    rightcolum: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    rightcolum1: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    strong: {
        fontSize: 13,
        color: '#000',
        marginVertical: 2,
    },
    greytext: {
        color: '#747474',
        paddingLeft: 6,
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
          textAlign: 'center',
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
      }

}); 