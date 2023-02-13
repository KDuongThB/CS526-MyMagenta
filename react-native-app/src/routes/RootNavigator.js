import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../assets/constants/screens';
import OnBoardingScreen from '../screens/onboarding';
import AuthenticateScreen from '../screens/auth';
const Stack = createNativeStackNavigator();

const RootNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={SCREEN_NAME.ONBOARDING_SCREEN}
                    component={OnBoardingScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.AUTHENTICATE_SCREEN}
                    component={AuthenticateScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
