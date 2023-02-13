import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    body: {
        alignSelf: 'center',
        width: scaleX(242),
        height: scaleY(174),
        marginTop: scaleY(10),
        registerSpace: {
            borderBottomColor: COLORS.MECURY,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        registerText: {
            color: COLORS.NOBEL,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(12),
            lineHeight: normalize(13.8),
        },
    },
    footer: {
        width: scaleX(242),
        flex: 1,
        flexDirection: 'column-reverse',
        alignSelf: 'center',
        alignItems: 'center',
        registerBtn: {
            marginTop: scaleY(80),
            width: scaleX(200),
            height: scaleY(44),
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.TORCH_RED,
        },
        register_btnText: {
            color: 'white',
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(16),
            lineHeight: normalize(18.4),
        },
    },
});

export default styles;
