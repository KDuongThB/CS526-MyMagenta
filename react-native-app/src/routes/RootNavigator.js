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
import ProcessScreen from '../screens/process';
import AddProcessScreen from '../screens/addprocess';
import ProductInformationScreen from '../screens/productinfo';
import AddProductToRoutine from '../screens/addproduct_toroutine';
import {createDrawerNavigator} from '@react-navigation/drawer';
import COLORS from '../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../helperFunction';
import CustomDrawer from '../components/CustomDrawer';
import {
    ICHome,
    ICListBoxes,
    ICPersonCircle,
    ICProcess,
    ICProfile,
} from '../assets/icons';
// import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: COLORS.CARDINAL,
                drawerActiveTintColor: COLORS.WHITE,
                drawerInactiveTintColor: COLORS.MINE_SHAFT,
                // drawerInactiveTintColor: COLORS.BLACK,

                drawerLabelStyle: {
                    fontFamily: 'Arial',
                    fontWeight: '700',
                    fontSize: normalize(16),
                    lineHeight: normalize(18.1),
                    marginLeft: scaleX(-20),
                },
                drawerStyle: {
                    // backgroundColor: COLORS.BLACK,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                },
            }}>
            <Drawer.Screen
                name="Trang chủ"
                component={HomeScreen}
                options={{
                    drawerIcon: ({color}) => <ICHome color={color} />,
                }}
            />
            <Drawer.Screen
                name="Hồ sơ"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({color}) => <ICProfile color={color} />,
                }}
            />
            <Drawer.Screen
                name="Sản phẩm"
                component={ProductScreen}
                options={{
                    drawerIcon: ({color}) => <ICListBoxes color={color} />,
                }}
            />
            <Drawer.Screen
                name="Theo dõi"
                component={MonitorScreen}
                options={{
                    drawerIcon: ({color}) => <ICPersonCircle color={color} />,
                }}
            />
            <Drawer.Screen
                name="Quy trình"
                component={ProcessScreen}
                options={{
                    drawerIcon: ({color}) => <ICProcess color={color} />,
                }}
            />
            {/* <Drawer.Screen
                    name={'Đăng xuất'}
                    component={ProcessScreen}
                    options={{
                        drawerIcon: ({color}) => <ICProcess />,
                    }}
                /> */}
        </Drawer.Navigator>
    );
};

const RootNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen
                    name={SCREEN_NAME.PROCESS_SCREEN}
                    component={ProcessScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.ADD_PROCESS_SCREEN}
                    component={AddProcessScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.MONITOR_SCREEN}
                    component={MonitorScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.PRODUCT_TO_ROUTINE}
                    component={AddProductToRoutine}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.PRODUCT_SCREEN}
                    component={ProductScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.PRODUCT_INFORMATION_SCREEN}
                    component={ProductInformationScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name={SCREEN_NAME.PROFILE_SCREEN}
                    component={ProfileScreen}
                    options={{headerShown: false}}
                /> */}
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
                    component={AppNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN_NAME.SEARCH_PRODUCT_SCREEN}
                    component={SearchProductScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
