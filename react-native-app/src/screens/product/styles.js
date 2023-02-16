import {StyleSheet} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        pad: {
            width: '100%',
            height: scaleY(40),
            backgroundColor: COLORS.CARDINAL,
        },
        text: {
            marginTop: scaleY(42),
            marginLeft: scaleX(30),
            fontSize: normalize(24),
            color: COLORS.BLACK,
            fontWeight: '700',
        },
    },
    button: {
        marginTop: scaleY(37),
        alignSelf: 'center',
        height: scaleY(52),
    },
    body: {
        quatity: {
            color: COLORS.GRAY,
            marginLeft: scaleX(30),
            marginTop: scaleY(4),
        },
    },
    product: {
        // backgroundColor: COLORS.CABARET,
    },
});

export default styles;
