import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../src/screens/ProductsOverviewScreen';

const ProductsStack = createStackNavigator();

const ProductsNavigator = () => {
    return (
        <ProductsStack.Navigator>
            <ProductsStack.Screen name="ProductsOverView" component={ProductsOverviewScreen} />
        </ProductsStack.Navigator>      
    )
}

export default ProductsNavigator;