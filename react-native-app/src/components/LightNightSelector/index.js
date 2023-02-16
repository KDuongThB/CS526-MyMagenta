import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {ICMoon, ICSun} from '../../assets/icons';

const CustomLightNightSelector = ({isChoosing, label, onPress}) => {
    console.log('isChoosing: ', isChoosing);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.buttonSelector({isChoosing})}>
                <View style={styles.icon}>{label === 'Sáng' && <ICSun />}</View>
                <View style={styles.icon}>{label === 'Tối' && <ICMoon />}</View>
                <Text style={styles.textN}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomLightNightSelector;
