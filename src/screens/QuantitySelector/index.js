import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


import { icons, COLORS, SIZES, FONTS } from '../../constants';

import colors from '../../styles1/colors';

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={[styles.button, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}]}>
                <Text style={{...FONTS.body1}}>-</Text>
            </Pressable>

            <View style={styles.quantityContainer}>
                <Text style={{...FONTS.h2}}>{quantity}</Text>
            </View>

            <Pressable onPress={onPlus} style={[styles.button, {borderTopRightRadius: 10, borderBottomRightRadius: 10}]}>
                <Text style={{...FONTS.body1}}>+</Text>
            </Pressable>
        </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: SIZES.width,
    height: 40,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    width: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#666666',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 1,
  },
  quantityContainer: {
    width: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#666666',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
  },
  butonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  },
});

export default QuantitySelector;