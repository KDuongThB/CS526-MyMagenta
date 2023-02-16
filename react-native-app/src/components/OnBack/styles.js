import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../../helperFunction';

const styles = StyleSheet.create({
    container: {
        height: 32,
        width: 32,
        marginLeft: scaleX(20),
    },
});

export default styles;
