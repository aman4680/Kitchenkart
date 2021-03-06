import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StatisticsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Stats</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});