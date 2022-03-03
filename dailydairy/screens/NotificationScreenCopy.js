import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationScreenCopy = () => {
    return (
        <View style={styles.container}>
            <Text>NotificationScreenCopy</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default NotificationScreenCopy;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});