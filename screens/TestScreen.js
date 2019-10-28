import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {  Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {TestComponent } from './../components/AppComponents';


export default function TestScreen() {
  return (
    <View style={{paddingTop:30}}>
      <Text>What it do babeeee</Text>
      <TestComponent/>
    </View>
  );
}

TestScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  
});
