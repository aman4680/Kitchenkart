import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Animated, Image, TouchableOpacity, Button, ViewPropTypes } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import images from '../../constants/images';

const { onboarding1, onboarding2, onboarding3 } = images; 

const Skip = ({...props}) => {
  return <Button title="Skip" color="#000000" {...props} />
}

const Next = ({...props}) => {
  return <Button title="Next" color="#000000" {...props} />
}

const Done = ({...props}) => {
  // return <Button title="Done" color="#000000" backgroundColor="#a6e4d0" {...props} />
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props} >
      <Text style={{fontSize: 16, opacity:0.9}}> Done </Text>
    </TouchableOpacity>
  )
}

const OnBoardingOne = ({navigation}) => {
  return (
    <Onboarding
    // SkipButtonComponent={Skip}
    // NextButtonComponent={Next}
    DoneButtonComponent={Done}
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
    bottomBarColor="#FFFFFF"
    bottomBarHighlight="false"
    bottomBarHighlight="false"
      pages={[
        {
          backgroundColor: "#FFFFFF",
          image: <Image source={onboarding1} />,
          title: "Scan and Browse",
          subtitle: "Scan QR Code placed on the table to explore menu",
        },
        {
          backgroundColor: "#FFFFFF",
          image: <Image source={onboarding2} />,
          title: "Contactless Order",
          subtitle: "Place orders straight through your device to kitchen",
        },
        {
          backgroundColor: "#FFFFFF",
          image: <Image source={onboarding3} />,
          title: "Easy Payment",
          subtitle: "When ready to checkout, Review the bill, pay & tip securely through your device",
        }
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default OnBoardingOne;