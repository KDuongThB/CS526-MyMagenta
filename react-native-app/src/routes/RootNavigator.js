import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../assets/constants/screens';
import OnBoardingScreen from '../screens/onboarding';
import AuthenticateScreen from '../screens/auth';
import HomeScreen from '../screens/home';
import ProductScreen from '../screens/product';
import SearchProductScreen from '../screens/searchproduct';
import ProfileScreen from '../screens/profile';
import MonitorScreen from '../screens/monitor';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={SCREEN_NAME.PROFILE_SCREEN}
                    component={ProfileScreen}
                    options={{headerShown: false}}
                />
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
                <Stack.Screen
                    name={SCREEN_NAME.HOME_SCREEN}
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.PRODUCT_SCREEN}
                    component={ProductScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.SEARCH_PRODUCT_SCREEN}
                    component={SearchProductScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.MONITOR_SCREEN}
                    component={MonitorScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
