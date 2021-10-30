import React, { useState } from 'react';
import {
    View,
    Text,
    Image,  
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from 'react-native';
  
  import { icons, images, SIZES, COLORS, FONTS } from '../constants';

  import { useSelector } from 'react-redux';

  const ProductsOverviewScreen = (props) => {
      const products  = useSelector(state => state.products.availableProducts);
      return (
        <FlatList 
            data={products}
            keyExtractor={item => item.menuId}
            renderItem={itemData => <Text>{itemData.item.name}</Text>}
        />
      )
  };

  export default ProductsOverviewScreen;