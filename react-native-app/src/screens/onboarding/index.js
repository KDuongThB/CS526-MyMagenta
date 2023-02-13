import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import COLORS from '../../assets/constants/colors';
import {scaleX, scaleY} from '../../helperFunction';
import LinearGradient from 'react-native-linear-gradient';

const OnBoardingScreen = () => {
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
                                    fontSize: 16,
                                    fontFamily: 'Arial',
                                })
                            }>
                            Skincare routine
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Image
                            source={require('../../assets/images/FooterImage/FooteImage1x.png')}
                        />
                    </View>
                </LinearGradient>
            </View>
        </React.Fragment>
    );
};

export default OnBoardingScreen;
