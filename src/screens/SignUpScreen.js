  
import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {

    // const [data, setData] = React.useState({
    //     username: '',
    //     password: '',
    //     // name: '',
    //     // phoneNumber: '',
    //     confirm_password: '',
    //     check_textUsernameChange: false,
    //     secureTextEntry: true,
    //     confirm_secureTextEntry: true,
    //     isValidUser: true,
    //     isValidPassword: true,    
    //     // isValidPhone: true,
    // });

    // const textUsernameChange = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textUsernameChange: true,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textUsernameChange: false,
    //             isValidUser: false
    //         });
    //     }
    // }

    // // const handlePhoneChange = (val) = {
    // //     setData({
    // //         ...data,
    // //         phoneNumber: val
    // //     });
    // // }

    // // const textNameChange = (val) = {
    // //     setData({
    // //         ...data,
    // //         name: val
    // //     });
    // // }

    // const handlePasswordChange = (val) => {
    //     if( val.trim().length >= 8 ) {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: true
    //         });
    //     } 
    //     else {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: false
    //         });
    //     }
    // }

    // const handleConfirmPasswordChange = (val) => {
    //     setData({
    //         ...data,
    //         confirm_password: val
    //     });
    // }

    // const updateSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         secureTextEntry: !data.secureTextEntry
    //     });
    // }

    // const updateConfirmSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         confirm_secureTextEntry: !data.confirm_secureTextEntry
    //     });
    // }

    // const handleValidUser = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             isValidUser: false
    //         });
    //     }
    // }

    // return (
    //   <View style={styles.container}>
    //     <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    //     <View style={styles.header}>
    //         <Text style={styles.text_header}>Register Now!</Text>
    //     </View>
    //     <Animatable.View 
    //         animation="fadeInUpBig"
    //         style={styles.footer}
    //     >
    //         <ScrollView>

    //             {/* UserName */}
    //             <Text style={styles.text_footer}>Username</Text>
    //             <View style={styles.action}>
    //                 <FontAwesome 
    //                     name="user-o"
    //                     color="#05375a"
    //                     size={20}
    //                 />
    //                     <TextInput 
    //                         placeholder="Your Username"
    //                         style={styles.textInput}
    //                         autoCapitalize="none"
    //                         onChangeText={(val) => textUsernameChange(val)}
    //                         onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
    //                     />
    //                 {data.check_textUsernameChange ? 
    //                 <Animatable.View animation="bounceIn" >
    //                     <Feather 
    //                         name="check-circle"
    //                         color="green"
    //                         size={20}
    //                     />
    //                 </Animatable.View>
    //                 : null}
    //             </View>
    //             { data.isValidUser ? null : 
    //             <Animatable.View animation="fadeInLeft" duration={500}>
    //                 <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
    //             </Animatable.View>
    //             }

    //             {/* Name Field */}
    //             {/* <Text style={styles.text_footer}>Name</Text>
    //             <View style={styles.action}>
    //                 <FontAwesome 
    //                     name="user-o" 
    //                     size={20} 
    //                 />
    //                 <TextInput
    //                     placeholder="Enter your Name"
    //                     // placeholderTextColor="#666666"
    //                     autoCorrect={false}
    //                     style={styles.textInput}
    //                     // onChangeText={(val) => textNameChange(val)}
    //                 />
    //             </View>
    //             <Animatable.View animation="fadeInLeft" duration={500}>
    //                 <Text style={styles.errorMsg}> </Text>
    //             </Animatable.View> */}

    //             {/* Phone Number Field */}
    //             {/* <Text style={styles.text_footer}>Phone Number</Text>
    //             <View style={styles.action}>
    //                 <Feather name="phone" size={20} />
    //                 <TextInput
    //                     placeholder="Enter phone number"
    //                     style={styles.textInput}
    //                     // val={phoneNumber}                        
    //                     autoCorrect={false}
    //                     // onChangeText={(val) => handlePhoneChange(val)}                        
    //                 />
    //             </View>
    //             <Animatable.View animation="fadeInLeft" duration={500}>
    //                 <Text style={styles.errorMsg}> </Text>
    //             </Animatable.View> */}

    //             {/* Password */}
    //             <Text style={[styles.text_footer, { marginTop: 10 }]}>Password</Text>
    //             <View style={styles.action}>
    //                 <Feather 
    //                     name="lock"
    //                     color="#05375a"
    //                     size={20}
    //                 />
    //                 <TextInput 
    //                     placeholder="Your Password"
    //                     secureTextEntry={data.secureTextEntry ? true : false}
    //                     style={styles.textInput}
    //                     autoCapitalize="none"
    //                     onChangeText={(val) => handlePasswordChange(val)}
    //                 />
    //                 <TouchableOpacity onPress={updateSecureTextEntry} >
    //                     {data.secureTextEntry ? 
    //                     <Feather 
    //                         name="eye-off"
    //                         color="grey"
    //                         size={20}
    //                     />
    //                     :
    //                     <Feather 
    //                         name="eye"
    //                         color="grey"
    //                         size={20}
    //                     />
    //                     }
    //                 </TouchableOpacity>
    //             </View>
    //             { data.isValidPassword ? null : 
    //             <Animatable.View animation="fadeInLeft" duration={500}>
    //                 <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
    //             </Animatable.View>
    //             } 

    //             {/* Confirm Password */}
    //             <Text style={[styles.text_footer, { marginTop: 10 }]}>Confirm Password</Text>
    //             <View style={styles.action}>
    //                 <Feather 
    //                     name="lock"
    //                     color="#05375a"
    //                     size={20}
    //                 />
    //                 <TextInput 
    //                     placeholder="Confirm Your Password"
    //                     secureTextEntry={data.confirm_secureTextEntry ? true : false}
    //                     style={styles.textInput}
    //                     autoCapitalize="none"
    //                     onChangeText={(val) => handleConfirmPasswordChange(val)}
    //                 />
    //                 <TouchableOpacity onPress={updateConfirmSecureTextEntry} >
    //                     {data.secureTextEntry ? 
    //                     <Feather 
    //                         name="eye-off"
    //                         color="grey"
    //                         size={20}
    //                     />
    //                     :
    //                     <Feather 
    //                         name="eye"
    //                         color="grey"
    //                         size={20}
    //                     />
    //                     }
    //                 </TouchableOpacity>
    //             </View>
                
    //             {/* T&C and Privacy Policy */}
    //             <View style={styles.textPrivate}>
    //                 <Text style={styles.color_textPrivate}>
    //                     By signing up you agree to our
    //                 </Text>
    //                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
    //                 <Text style={styles.color_textPrivate}>{" "}and</Text>
    //                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
    //             </View>

    //             {/* Register and SignIn Buttons */}
    //             <View style={styles.button}>
    //                 <TouchableOpacity style={styles.signIn} onPress={() => {}} >
    //                     {/* <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn} > */}
    //                         <Text style={[styles.textSign, { color:'#009387' }]}>Register</Text>
    //                     {/* </LinearGradient> */}
    //                 </TouchableOpacity>

    //                 <TouchableOpacity
    //                     onPress={() => navigation.goBack()}
    //                     style={[styles.signIn, {
    //                         borderColor: '#009387',
    //                         borderWidth: 1,
    //                         marginTop: 15
    //                     }]}
    //                 >
    //                     <Text style={[styles.textSign, { color: '#009387' }]}>Sign In</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </ScrollView>
    //     </Animatable.View>
    //   </View>
    // );

    return (
        <View>
            <Text>Hello Signup</Text>
        </View>
    )
};

export default SignUpScreen;

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
        flex: Platform.OS === 'ios' ? 3 : 5,
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    signIn: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });