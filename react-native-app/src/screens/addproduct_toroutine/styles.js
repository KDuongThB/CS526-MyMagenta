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
    body: {
        marginTop: scaleY(15),
        alignSelf: 'center',
        width: scaleX(335),
        image: {
            width: scaleX(165),
            height: scaleY(165),
            alignSelf: 'center',
            resizeMode: 'contain',
        },
        middle: {
            marginLeft: scaleX(5),
        },
        content: {
            marginTop: scaleY(10),
            borderBottomColor: COLORS.MERCURY,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        titleText: {
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(16),
            lineHeight: normalize(18),
            marginTop: scaleY(15),
        },
        contentText: {
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(16),
            lineHeight: normalize(18),
        },
    },
    bottom: {
        marginTop: scaleY(20),
        marginBottom: scaleY(20),
        titleText: {
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(20),
            lineHeight: normalize(22),
            marginTop: scaleY(15),
        },
        dateText: {
            color: COLORS.GRAY,
            fontWeight: '700',
            fontSize: normalize(18),
        },
        dailyCheckSpace: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: scaleY(16),
        },
        checkbox: {
            marginTop: scaleY(5),
            height: scaleY(20),
            width: scaleX(20),
            borderRadius: 3,
            borderColor: COLORS.MERCURY,
            borderWidth: 1,
            alignSelf: 'center',
            backgroundColor: COLORS.WHITE,
        },
    },
});

export default styles;
