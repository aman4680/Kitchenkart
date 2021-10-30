import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import StarRating from '../../components/Data/StarRating';

const ProductItem = (props) => {
    return (
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={props.image } resizeMode="cover" style={styles.cardImg} />
                </View>

                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{props.title}</Text>                
                    <StarRating ratings={4} reviews={99} />
                    <Text style={styles.cardDetails}>{props.calories} calories </Text>
                    <View style={{flexDirection: "row", width: 60}}>
                        <Text style={styles.cardDetails}>$ </Text>
                        <Text style={[styles.cardDetails, {fontSize: 20, fontWeight: "bold"}]}>{props.price}</Text>
                    </View>
                </View>                     
            </View>
        </View>
        
    )
}

export default ProductItem;

const styles = StyleSheet.create({
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
        elevation: 5,
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
})