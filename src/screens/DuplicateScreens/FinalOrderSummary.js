import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import StarRating from '../../../components/Data/StarRating';
import { images } from '../../constants';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import QuantitySelector from '../QuantitySelector';

const CartScreen = ({navigation}) => {
    
    const [quantityOne, setQuantityOne] = useState(2);
    const [quantityTwo, setQuantityTwo] = useState(3);    

    return (
      <View style={styles.container}>                       
            <View style={{flex:1, justifyContent: "space-between", alignItems: "center"}}>
                <View style={styles.cardsWrapper}>
                    <Text
                        style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#333',
                        marginVertical: 18
                        }}
                    >
                        Order Summary
                    </Text>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={images.teh_c_peng}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Iced Milk Tea</Text>
                            {/* <StarRating ratings={4} reviews={99} /> */}
                            <Text style={styles.cardDetails}>
                                Iced Milk Tea recipe made with black tea, sweetened condensed milk
                            </Text>
                            <Text style={styles.cardDetails}>Qty: {quantityOne}</Text>
                            <Text style={styles.cardDetails}>Price: 180</Text>
                        </View>
                    </View>                    
                    
                    {/* <Text>Price: 360</Text>                       */}
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={images.kolo_mee}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Chinese Style Noodles</Text>                            
                            <Text style={styles.cardDetails}>
                                Malaysian Style Chinese Noodles
                            </Text>
                            <Text style={styles.cardDetails}>Qty: {quantityTwo}</Text>
                            <Text style={styles.cardDetails}>Price: 230</Text>
                        </View>
                    </View>  
                    {/* <Text>Price: 690</Text>                    */}
                </View>        
                <Text style={styles.cardTitle}>Total Price: {quantityOne*180 + quantityTwo*230}</Text> 
                <TouchableOpacity style={styles.commandButton} onPress={() => alert("Redirecting you to payment portal") }>
                    <Text style={styles.panelButtonTitle}>Place Order</Text>
                </TouchableOpacity>
            </View>          
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    //   alignItems: 'center', 
    //   justifyContent: 'center'
    },
    commandButton: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',    
      marginTop: 10,
    },
    cardsWrapper: {
      width: '98%',
      alignSelf: 'center',
    },
    card: {
      height: 130,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,    
    },
    cardImg: {
      height: '100%',
      width: 130,
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      // elevation: 5,
    },
    cardInfo: {  
      flex: 2,  
      paddingLeft: 20,
      paddingTop: 15,
      paddingBottom: 15,
      flexDirection: "column",
      justifyContent: "space-around",
      borderColor: '#ccc',
      borderWidth: 1,
      // borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontSize: 20,
    },
    cardDetails: {
      fontSize: 14,
      color: '#444',
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