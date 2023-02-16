import React from 'react';
import styles from './styles';
import {View, TouchableOpacity} from 'react-native';
import {ICBackNavigation} from '../../assets/icons';

const OnBack = ({onBack}) => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <TouchableOpacity onPress={onBack}>
                    <ICBackNavigation />
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
};

export default OnBack;
