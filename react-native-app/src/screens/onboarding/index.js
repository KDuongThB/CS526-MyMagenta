import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import COLORS from '../../assets/constants/colors';
import {normalize} from '../../helperFunction';
import LinearGradient from 'react-native-linear-gradient';
import SCREEN_NAME from '../../assets/constants/screens';
import {useEffect, useRef} from 'react';

const OnBoardingScreen = props => {
    const timerRef = useRef(null);
    const {navigation} = props;
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            navigation.navigate(SCREEN_NAME.AUTHENTICATE_SCREEN);
        }, 3000);

        return () => clearTimeout(timerRef.current);
    });
    return (
        <React.Fragment>
            <View style={styles.container}>
                <LinearGradient
                    colors={[
                        COLORS.TORCH_RED,
                        COLORS.CARDINAL,
                        COLORS.CARDINAL,
                    ]}
                    style={styles.linearGradient}>
                    <View style={styles.header}>
                        <Image
                            style={styles.header.logoHeader}
                            source={require('../../assets/images/LogoBrand/LogoBrand1x.png')}
                        />
                        <Text style={styles.header.textBrand}>My Magenda</Text>
                        <Text
                            style={
                                // Using css inline to set fontWeight
                                (styles.header.textDescription,
                                {
                                    fontWeight: 'bold',
                                    color: COLORS.WHITE,
                                    fontSize: normalize(16),
                                    fontFamily: 'Arial',
                                })
                            }>
                            Skincare routine
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Image
                            source={require('../../assets/images/FooterImage/FooterImage1-1x.png')}
                        />
                    </View>
                </LinearGradient>
            </View>
        </React.Fragment>
    );
};

export default OnBoardingScreen;
