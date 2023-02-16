import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
            text: {
                marginLeft: scaleX(17),
                fontSize: normalize(24),
                color: COLORS.BLACK,
                fontWeight: '700',
            },
        },
    },
    textboxContainer: {
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        marginHorizontal: scaleX(38),
        borderRadius: normalize(30),
        marginTop: normalize(40),
        icsearch: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: scaleX(16),
        },
        input: {
            width: '100%',
            marginLeft: scaleX(7),
            color: COLORS.BLACK,
        },
    },
    noItemContainer: {
        backgroundColor: COLORS.CARDINAL,
        flexDirection: 'row',
        marginHorizontal: scaleX(38),
        borderRadius: normalize(15),
        marginTop: normalize(36),
        paddingVertical: scaleY(19),
        text: {
            marginLeft: scaleX(16),
            text1: {
                fontSize: normalize(16),
                fontWeight: '700',
                color: COLORS.WHITE,
            },
            text2: {
                marginTop: scaleY(8),
                fontSize: normalize(14),
                fontWeight: '700',
                color: COLORS.WHITE,
            },
        },
        icnav: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: scaleX(70),
        },
    },
});

export default styles;
