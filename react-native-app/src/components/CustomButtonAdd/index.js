import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ICPlus} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../assets/constants/colors';

const CustomButtonAdd = props => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonHandle}
                    onPress={props.onNavigate}>
                    <LinearGradient
                        start={{x: 0.25, y: 0.6}}
                        end={{x: 0.75, y: 1.0}}
                        locations={[0, 0.8]}
                        colors={[COLORS.CARDINAL, COLORS.CABARET]}
                        style={styles.linearGradient}>
                        <View style={styles.buttonHandle.container}>
                            <ICPlus color={COLORS.WHITE} />
                            <Text style={styles.buttonHandle.text}>
                                {props.label}
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
};

export default CustomButtonAdd;
