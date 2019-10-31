import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert }  from 'react-native';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    onSignupPress = () => {

        if(this.state.password !== this.state.passwordConfirm){
            Alert.alert("Password doesn't match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.props.navigation.navigate("Main");
        }, (error) => {
            Alert.alert(error.message);
        });
        /*     .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        }); */
    }
    onBackToLoginPress = () => {
        this.props.navigation.navigate("Login");
    }

    render(){
        return(
            <View style={{paddingTop:100, alignItems:'center'}}>
            <Text>SignupScreen</Text>
                <TextInput style={{width:200, height:40, borderWidth:1}}
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({email: text}) }}
                />

                <TextInput style={{width:200, height:40, borderWidth:1}}
                    value={this.state.password}
                    onChangeText={(text) => {this.setState({password: text}) }}
                />

                <TextInput style={{width:200, height:40, borderWidth:1}}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => {this.setState({passwordConfirm: text}) }}
                />

                <Button title="Signup" onPress={this.onSignupPress}/>
                
                <Button title="Back to Login" onPress={this.onBackToLoginPress}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  
});

