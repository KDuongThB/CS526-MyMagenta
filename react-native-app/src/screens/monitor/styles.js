import {StyleSheet} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.ZIRCON,
    },
    header: {
        pad: {
            width: '100%',
            height: scaleY(40),
            backgroundColor: COLORS.CARDINAL,
        },
        title: {
            flexDirection: 'row',
            marginTop: scaleY(38),
            height: scaleY(30),
            text: {
                marginLeft: scaleX(30),
                fontSize: normalize(24),
                color: COLORS.BLACK,
                fontWeight: '700',
            },
        },
    },
    body: {
        imageEmpty: {
            alignSelf: 'center',
            marginTop: scaleY(72),
        },
        text1: {
            marginTop: scaleY(40),
            alignSelf: 'center',
            color: COLORS.BLACK,
            fontSize: normalize(18),
            fontWeight: '700',
        },
        text2: {
            marginTop: scaleY(5),
            width: scaleX(315),
            alignSelf: 'center',
            textAlign: 'center',
            color: COLORS.GRAY,
            fontSize: normalize(16),
            fontWeight: '700',
        },
        buttonAdd: {
            height: scaleY(52),
            marginTop: scaleY(59),
            alignSelf: 'center',
        },
    },
});

export default styles;
