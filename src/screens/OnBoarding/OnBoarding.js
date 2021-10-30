import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Animated, Image, ImageBackground, TouchableOpacity } from 'react-native';
import theme from '../../constants/theme';

import images from '../../constants/images';

const { onboarding1, onboarding2, onboarding3 } = images; 
const { COLORS, FONTS, SIZES } = theme;

const backImg = require('../../../assets/white.jpg')

const onBoardings = [
  {
    title: "Scan and Browse",
    description: "Scan QR Code placed on the table to explore menu",
    img: onboarding1
  },
  {
    title: "Contactless Order",
    description: "Place orders straight through your device to kitchen",
    img: onboarding2
  },
  {
    title: "Easy Payment",
    description: "When ready to checkout, Review the bill, pay & tip securely through your device",
    img: onboarding3
  },
]

const OnBoarding = () => {
  
  // const[ completed, setCompleted ] = React.useState(false);
  const scrollX = new Animated.Value(0);

  // React.useEffect(() => {
  //   scrollX.addListener(({value}) => {
  //     if(Math.floor(value / SIZES.width) === onBoardings.length - 1) {
  //       setCompleted(true)
  //     }
  //   })

  //   return () => scrollX.removeListener();
  // }, [])
  //Render

  function renderContent() {
    return (
      <Animated.ScrollView 
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        // showsHorizontalScrollIndicator={false}
      >
        { onBoardings.map((item, index) => (
            <View key={index} style={{ width: SIZES.width }}>
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                <Image source={item.img} resizeMode="contain" style={{ position: 'absolute', width: "100%", height: "100%" }} />
              </View>
              <View style={{ position: 'absolute', bottom: "16%", left: 30, right: 30 }} >
                <Text style={{ ...FONTS.h1, color: COLORS.black, textAlign: 'center'}}> { item.title } </Text>
                <Text style={{ ...FONTS.body3, textAlign: 'center', color: COLORS.gray, marginTop: SIZES.base }}> { item.description } </Text>
              </View>

              { /*Skip Button */}
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 60,
                  height: 60,
                  paddingLeft: 20,
                  justifyContent: "center",
                  backgroundColor: COLORS.white
                }}
                onPress={() => alert("Skip Button on Pressed")}
              >
                <Text style={{ ...FONTS.h3 }}>Skip</Text>
                {/* <Text style={{ ...FONTS.h1, color: COLORS.white }}> { completed ? "Let's Go" : "Skip" } </Text> */}
              </TouchableOpacity>

              { /*Next Button */}
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 60,
                  height: 60,
                  paddingRight: 20,
                  justifyContent: "center",
                  backgroundColor: COLORS.white
                }}
                onPress={() => alert("Next Button on Pressed")}
              >
                <Text style={{ ...FONTS.h3 }}>Next</Text>
                {/* <Text style={{ ...FONTS.h1, color: COLORS.white }}> { completed ? "Let's Go" : "Skip" } </Text> */}
              </TouchableOpacity>
            </View>
        ))}
      </Animated.ScrollView>
    )
  }

  function renderDots() {

    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
      <View style={ styles.dotContainer }>
        { onBoardings.map((item, index) => {

          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          })

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base / 2, 8, SIZES.base / 2],
            extrapolate: "clamp"
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            >
              
            </Animated.View>
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View> 
        { renderContent() }
      </View>
      <View style={styles.dotsRootContainer}>
        { renderDots() }        
      </View>
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '20%' : '10%'
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: "#323332",
    marginHorizontal: SIZES.radius / 10
  }
})

export default OnBoarding;