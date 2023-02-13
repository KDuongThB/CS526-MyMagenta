import React from 'react';
import styles from './styles';
import {View, Text, Image} from 'react-native';
import COLORS from '../../assets/constants/colors';
import {normalize} from '../../helperFunction';

const CustomLogo = () => {
    return (
        <React.Fragment>
            <View style={styles.header}>
                <Image
                    style={styles.header.logoHeader}
                    source={require('../../assets/images/LogoBrandMini/LogoBrand-mini1x.png')}
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
        </React.Fragment>
    );
};

export default CustomLogo;
