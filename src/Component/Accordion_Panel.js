import React, { Component } from 'react';
import {
    Dimensions, StyleSheet, Text, View, Image, TouchableHighlight, Animated
} from 'react-native'; //Step 1
import HideView from '../Component/HideView';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {     //Step 2
            'up': require('../assets/icons/plus.png'),
            'down': require('../assets/icons/plus.png')
        };

        this.state = {       //Step 3
            title: props.title,
            expanded: true,
            animation: new Animated.Value()
        };
    }

    toggle() {

        //Step 1
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();  //Step 5
    }


    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = require('../assets/icons/minus.png'); 

        if (this.state.expanded) {
            icon = require('../assets/icons/plus1.png');   //Step 4
        }

        //Step 5
        return (
            <View style={styles.container} >
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)} 
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    <HideView hide={this.state.expanded}>
                        {this.props.children}

                    </HideView>
                </View>

            </View>
        );
    }
}
export default Panel;


var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 21,
        overflow: 'hidden',
        elevation: 4,
        color: '#747474',
        borderRadius: 8,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 15, 
        paddingRight: 15
    },
    titleContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',

    },
    title: {
        flex: 1,
        color: '#747474',
        fontWeight: '500',
        fontSize: 15
    },
    buttonImage: {
        width: 25,
        height: 25
    },
    body: {
        paddingTop: 0
    }
});