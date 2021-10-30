import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const CartScreen = ({navigation}) => {

    const [ phoneNumber, setPhoneNumber ] = useState('');

    const handleValidPhoneNumber = (phoneNum) => {
      if(!isNaN(phoneNum)) {
        if( phoneNum.trim().length == 10 ) {
          setPhoneNumber(phoneNum);
          navigation.navigate('Login');
        } 
        else {
          setPhoneNumber(phoneNum);
          Alert.alert('Wrong Input!', 'Please enter a valid 10 digit phone number.', [
            {text: 'Okay'}
          ]);
          return;
        }
      } 
      else {
        Alert.alert('Wrong Input!', 'Please enter a valid phone number.', [
          {text: 'Okay'}
        ]);
        return;
      }     
    }

    const handlePhoneCheck = () => {
      if ( phoneNumber.length == 0) {
        Alert.alert('Please enter a phone number', 'As phone number field cannot be empty.', [
            {text: 'Okay'}
        ]);
        return;
      }
      else {
        handleValidPhoneNumber(phoneNumber)
      }
    }

    const renderContent = () => (
      <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>Sign In</Text>          
        </View>        
        
        {/* Phone Number Field */}
        <View style={styles.action}>
          <Feather name="phone" size={20} />
          <TextInput
            placeholder="Enter phone number"
            val={phoneNumber}
            placeholderTextColor="#666666"
            // keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(val) => setPhoneNumber(val)}
            style={[styles.textInput, { color: "#000"},]}
          />
        </View>
        <TouchableOpacity style={styles.panelButtonNext} onPress={() => {handlePhoneCheck()}}>
          <Text style={styles.panelButtonTitle}>Next</Text>
        </TouchableOpacity>

        {/* Sign Up Container */}
        <View style={styles.signUpContainer}>
          <Text style={{ color: "black", fontSize: 16 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#008ae6", fontSize: 16 }}>Sign Up </Text>
          </TouchableOpacity>
        </View>        

        <TouchableOpacity
          style={styles.panelButtonCancel}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );

    const renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );

    const bs = React.useRef();
    const fall = new Animated.Value(1);

    return (
      <View style={styles.container}>
          <BottomSheet
            ref={bs}
            snapPoints={[500, 0]}
            renderContent={renderContent}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
          />
          <Animated.View style={{margin: 20, opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))}} >         
              <TouchableOpacity style={styles.commandButton} onPress={() => bs.current.snapTo(0) }>
                <Text style={styles.panelButtonTitle}>Proceed to checkout</Text>
              </TouchableOpacity>
          </Animated.View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#154c79',
    alignItems: 'center',    
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 40,
    marginBottom: 30
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButtonNext: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 30,
  },
  panelButtonCancel: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 20,
  },
  panelButtonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  }
});