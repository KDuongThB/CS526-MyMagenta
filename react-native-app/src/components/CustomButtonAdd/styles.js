import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../../helperFunction';

const styles = StyleSheet.create({
    container: {
        // height: scaleY(100),
    },
    linearGradient: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: scaleX(315),
        height: scaleY(52),
        borderRadius: 30,
    },
    buttonHandle: {
        container: {
            flexDirection: 'row',
            marginLeft: scaleX(14),
        },
        text: {
            color: COLORS.WHITE,
            marginLeft: scaleX(4),
            fontSize: normalize(16),
            fontWeight: '700',
        },
    },
});

export default styles;
