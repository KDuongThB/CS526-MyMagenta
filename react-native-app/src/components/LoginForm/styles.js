import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';

const styles = StyleSheet.create({
    body: {
        alignSelf: 'center',
        width: scaleX(242),
        height: scaleY(142),
        marginTop: scaleY(10),
        loginSpace: {
            marginTop: scaleY(10),
            borderBottomColor: COLORS.MERCURY,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        eyeImage: {},
        loginText: {
            color: COLORS.NOBEL,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(12),
            lineHeight: normalize(13.8),
        },
        forgotSpace: {
            flexDirection: 'row-reverse',
        },
        forgotText: {
            marginTop: scaleY(15),
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(12),
            lineHeight: normalize(13.8),
        },
    },
    footer: {
        marginTop: scaleY(50),
        flex: 1,
        width: scaleX(242),
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        loginBtn: {
            width: scaleX(200),
            height: scaleY(44),
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.TORCH_RED,
        },
        login_btnText: {
            color: 'white',
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(16),
            lineHeight: normalize(18.4),
        },
        hText: {
            color: COLORS.NOBEL,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(12),
            lineHeight: normalize(13.8),
            textTransform: 'uppercase',
        },
        another_loginText: {
            color: COLORS.TORCH_RED,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(12),
            lineHeight: normalize(13.8),
        },
    },
});

export default styles;
