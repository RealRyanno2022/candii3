import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrivacyPolicy from './components/onboarding/PrivacyPolicy';
import Intro from './components/onboarding/Intro';
import React from 'react';

export default function App() {


  const Stack = createStackNavigator();



  return (
    <View style={styles.container}>
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
         </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
