import React, { useEffect } from 'react';
import { 
    View, 
    // Text, 
    // TouchableOpacity, 
    // Dimensions,
    // StyleSheet,
    // StatusBar,
    Image,
    ImageBackground
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import { useTheme } from '@react-navigation/native';1

const backgroundImage = require('../../assets/backgroundImage.jpg');
const splashLogo = require('../../assets/newLogo.jpg');

const SplashScreen = ({navigation}) => {
    // const { colors } = useTheme();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("OnBoarding")
        }, 2000)
    }, [])

    return (
        // <View style = {styles.container}>
        //   <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        //     <View style = {styles.header}>
        //         <Animatable.Image 
        //             animation = "bounceIn"
        //             duraton = "1500"
        //             source = {splashLogo}
        //             style = {styles.logo}
        //             resizeMode = "stretch"
        //         />
        //     </View>
        //     <Animatable.View 
        //         style = {[styles.footer, {
        //             backgroundColor: colors.background
        //         }]}
        //         animation = "fadeInUpBig"
        //     >
        //         <Text style = {[styles.title, {
        //             color: colors.text
        //         }]}>Stay connected with everyone!</Text>
        //         <Text style = {styles.text}>Scan QR, Order digitally and Pay</Text>
        //         {/* <View style = {styles.button}>
        //             <TouchableOpacity onPress = {() => navigation.navigate('SignInScreen')}>
        //                 <LinearGradient
        //                     colors = {['#08d4c4', '#01ab9d']}
        //                     style = {styles.signIn}
        //                 >
        //                     <Text style = {styles.textSign}>Get Started</Text>
        //                     <MaterialIcons 
        //                         name = "navigate-next"
        //                         color = "#fff"
        //                         size = {20}
        //                     />
        //                 </LinearGradient>
        //             </TouchableOpacity>
        //         </View> */}
        //     </Animatable.View>
        // </View>

        <ImageBackground 
            source={backgroundImage}
            style={{height: "100%", width: "100%"}}
        >
            <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={splashLogo} style={{width: "100%", height: "100%"}} />
            </View>
        </ImageBackground>
    );
};

export default SplashScreen;

// const {height} = Dimensions.get("screen");
// const height_logo = height * 0.7;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     backgroundColor: '#009387'
//   },
//   header: {
//       flex: 2,
//       justifyContent: 'center',
//       alignItems: 'center'
//   },
//   footer: {
//       flex: 1,
//       backgroundColor: '#fff',
//       borderTopLeftRadius: 30,
//       borderTopRightRadius: 30,
//       paddingVertical: 50,
//       paddingHorizontal: 30
//   },
//   logo: {
//       width: height_logo,
//       height: height
//   },
//   title: {
//       color: '#05375a',
//       fontSize: 30,
//       fontWeight: 'bold'
//   },
//   text: {
//       color: 'grey',
//       marginTop:5
//   },
//   button: {
//       alignItems: 'flex-end',
//       marginTop: 30
//   },
//   signIn: {
//       width: 150,
//       height: 40,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 50,
//       flexDirection: 'row'
//   },
//   textSign: {
//       color: 'white',
//       fontWeight: 'bold'
//   }
// });