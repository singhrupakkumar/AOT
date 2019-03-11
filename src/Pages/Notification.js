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

export default class Notification extends Component {     
    constructor(props) { 
        super(props); 
        
        this.renderNotification = this.renderNotification.bind(this);
    }


    onPress = (notificationId) => {
        Alert.alert(
            '',
            'Are you sure you want to delete?'+notificationId,  
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
      }
      renderNotification(notificationId) {
        var  dedd = styles.notificationouteryellow;
        if(notificationId == 2){
             dedd = styles.notificationoutergreen;
         }else if(notificationId == 3){
             dedd = styles.notificationoutertheme;
         }else if(notificationId == 4){
             dedd = styles.notificationouterred; 
         }else{
             dedd = styles.notificationouteryellow;
         }
        return (<View style={dedd} key={notificationId}> 
            <View style={styles.notinner}>
                <View style={styles.textsection}>
                <Text style={styles.nottxt}>You have recieved a new application for job</Text>
                <Text style={styles.timetxt}>{notificationId+1} min ago</Text>
                </View> 
                <TouchableOpacity style={styles.btnimgout} onPress={()=>{this.onPress(notificationId)}}>     
                           <Image style={styles.btnimg} source={require('../assets/icons/delete.png')}/> 
                </TouchableOpacity>
            </View>    
        </View>)
      }


      notificationData = () => {
        var jobstatus = [1,2,3,4]
        return jobstatus.map((p) => (
          this.renderNotification(p)
        ))
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
        return (

        <ScrollView>
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content" backgroundColor="transparent" translucent={true}
                />
                
                    <View style={styles.container1}>
                            {this.notificationData()}
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
   btnimg: {
        height: 20,
        width: 20,
    },
    nottxt: {
        color: '#747474',
        fontSize: 13,
        lineHeight: 20,
    },
    notificationouteryellow: {
        backgroundColor: '#fff',
        marginTop: 21,
        overflow: 'hidden',
        elevation: 4,
        color: '#747474',
        borderRadius: 8,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 15, 
        paddingRight: 15,
        borderWidth:1,
        borderColor:'#E2C62B',
    },
    notificationoutertheme: {
        backgroundColor: '#fff',
        marginTop: 21,
        overflow: 'hidden',
        elevation: 4,
        color: '#747474',
        borderRadius: 8,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 15, 
        paddingRight: 15,
        borderWidth:1,
        borderColor:'#9800C2',
    },
    notificationoutergreen:{
        backgroundColor: '#fff',
        marginTop: 21,
        overflow: 'hidden',
        elevation: 4,
        color: '#747474',
        borderRadius: 8,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 15, 
        paddingRight: 15,
        borderWidth:1,
        borderColor:'#2BE24D',
    },
    notificationouterred:{
        backgroundColor: '#fff',
        marginTop: 21,
        overflow: 'hidden',
        elevation: 4,
        color: '#747474',
        borderRadius: 8,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 15, 
        paddingRight: 15,
        borderWidth:1,
        borderColor:'#C20900',
    },
    notinner: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems: 'center',
        
    },
    timetxt:{
        color:'#CCCCCC',
        fontSize:13,
        lineHeight:20
    },
    subhading: {
        fontSize: 13,
        lineHeight: 17,
        color: '#000'
    },
}); 