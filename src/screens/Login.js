import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, StatusBar, TextInput } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';

import { NavigationHelpersContext, useTheme } from '@react-navigation/native';

const Login = ({ navigation }) => {

    const { colors } = useTheme();

    const [data, setData] = useState({      
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidPassword: true,
    });

    const handlePasswordChange = (val) => {
      if( val.trim().length >= 8 ) {
          setData({
              ...data,
              password: val,
              isValidPassword: true
          });
      } 
      else {
          setData({
              ...data,
              password: val,
              isValidPassword: false
          });
      }
    }

    const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
    }

   /*  const loginHandle = (userPhoneNumber, password) => {

        const foundUser = Users.filter( userData => {
            return userPhoneNumber == userData.phoneNumber && password == userData.password;
        } );

        if ( data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Password length must not be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Phone Number and password doesn\'t match.', [
                {text: 'Okay'}
            ]);
            return;
        }
        // signIn(foundUser);
      }
    */

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content" />
          
          <Animatable.View 
              animation="fadeInUpBig"
              style={[styles.footer, {
                  backgroundColor: colors.background
              }]}
          >
              {/* Password Field */}
              <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]} >
                Your Password
              </Text>
              <View style={styles.action}>
                <Feather 
                  name="lock"
                  color={colors.text}
                  size={20}
                />                      
                <TextInput 
                    placeholder="Enter Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
              </TouchableOpacity>

              {/* Login Button */}
              <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}
                    // onPress={() => {loginHandle( data.username, data.password )}}
                >
                  {/* <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn} > */}
                      <Text style={[styles.textSign, { color:'#009387' }]}>Sign In</Text>
                  {/* </LinearGradient> */}
                </TouchableOpacity>
              </View>

          </Animatable.View>
        </View>
    )
}

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
// })

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});

export default Login;