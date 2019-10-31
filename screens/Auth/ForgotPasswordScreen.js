import React from 'react';
import {StyleSheet, View, Text, TextInput, Button }  from 'react-native';

export default class ForgotPasswordScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
        };
    }

    onResetPasswordPress = () => {
        this.props.navigation.navigate("Main");
    }
    onBackToLoginPress = () => {
        this.props.navigation.navigate("Login");
    }

    render(){
        return(
            <View style={{paddingTop:100, alignItems:'center'}}>
                <Text>ForgotPasswordScreen</Text>
                <TextInput style={{width:200, height:40, borderWidth:1}}
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({email: text}) }}
                />

                <Button title="Reset Password" onPress={this.onResetPasswordPress}/>
                
                <Button title="Back to Login" onPress={this.onBackToLoginPress}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  
});
