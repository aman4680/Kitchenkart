
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import colors from '../../styles1/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const BookmarkScreen = ({navigation}) => {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={{ top: 15, left: 15 }} onPress={() => {navigation.goBack()}}>
              <Ionicons name="arrow-back" size={30} />          
            </TouchableOpacity>
            <Text style={styles.heading}> Oops..!!! </Text>
            <Text style={styles.description}>
                You cannot see your favourite items as you are not logged in. So you need to login first.
            </Text>
            <Text style={styles.description}>
                Tap the Login button given below to Login.
            </Text>
            </ScrollView>
            <View style={styles.footer}>
            <TouchableOpacity style={styles.findHomesButton}>
                <Text style={styles.findHomesButtonText}>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 40,
    color: colors.gray04,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray04,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
  	position: 'absolute',
  	width: '100%',
  	height: 80,
  	bottom: 0,
  	borderTopWidth: 1,
  	borderTopColor: colors.gray05,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  findHomesButton: {
  	paddingTop: 15,
  	paddingBottom: 15,
  	marginTop: 16,
  	borderRadius: 3,
  	backgroundColor: colors.pink,
  },
  findHomesButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});
