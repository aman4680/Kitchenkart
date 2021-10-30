  
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            {/* <Button
                title="Go to details screen...again"
                onPress={() => navigation.push("Details")}
            /> */}
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to first Screen"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});