import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {  Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {TestComponent } from './../components/AppComponents';

import * as firebase from 'firebase';

export default function TestScreen() {

  var user = firebase.auth().currentUser;
  
  
  return (
    <View style={{paddingTop:30}}>
      <Text style={{fontSize:20}}>What it do babeeee, {user.email}</Text>
      <TestComponent/>
    </View>
  );
}

TestScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  
});
