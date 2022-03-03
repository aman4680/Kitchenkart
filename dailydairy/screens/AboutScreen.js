import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../DDstyles/colors';

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{ top: 15, left: 10 }} onPress={() => {navigation.goBack()}}>
              <Ionicons name="arrow-back" size={25} />          
          </TouchableOpacity>
          <Text style={styles.heading}>About</Text>
          <View style={styles.divider}></View>
          <TouchableOpacity>
              <View style={styles.wrapper}>
                <Text style={styles.text}>Terms of Service</Text>
                <FontAwesome name="angle-right" size={25} color={colors.gray09} />
              </View>
          </TouchableOpacity>  
          <View style={styles.divider}></View>        
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.text}>App Version</Text>
              <Text style={styles.textVersion}>v1.0.1</Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <TouchableOpacity>
              <View style={styles.wrapper}>
                <Text style={styles.text}>Open Source Libraries</Text>
                <FontAwesome name="angle-right" size={25} color={colors.gray09} />
              </View>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff"
  },  
  heading: {
    color: "#1a1a1a",
    fontSize: 28,
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
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18
  },
  text: {
    fontSize: 16,
    color: colors.gray04
  },
  textVersion: {
    fontSize: 14,
    color: colors.gray08
  }
});