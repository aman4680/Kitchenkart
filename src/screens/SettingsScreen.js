import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../styles1/colors';

const SettingsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ top: 15, left: 10 }} onPress={() => {navigation.goBack()}}>
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.heading}>Settings</Text>
        <View style={styles.divider}></View>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Add a Place</Text>
            <Text style={styles.textCaption}>In case we're missing something</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Places you've added</Text>
            <Text style={styles.textCaption}>See all the places you've added so far</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Edit Profile</Text>
            <Text style={styles.textCaption}>Change your name, description and profile photo</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Notification Settings</Text>
            <Text style={styles.textCaption}>Define what alerts and notifications you want to see</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Account Settings</Text>
            <Text style={styles.textCaption}>Change your email or delete your account</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },  
  heading: {
    color: "#1a1a1a",
    fontSize: 26,
    fontWeight: '100',
    paddingVertical: 25,
    paddingHorizontal: 14
  },
  divider: {
    borderWidth: 0.1,
    borderStyle: 'solid',
    borderColor: colors.lightGray,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    width: "96%",
    alignSelf: 'center'
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 14,    
  },
  textTitle: {
    fontSize: 18,
    color: colors.gray04,
    paddingVertical: 1    
  },
  textCaption: {
    fontSize: 14,
    color: colors.gray09,
    paddingVertical: 1
  }
});