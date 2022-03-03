import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DescriptionScreenCopy = () => {
    return (
        <View style={styles.container}>
            <Text>DescriptionScreenCopy</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default DescriptionScreenCopy;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});