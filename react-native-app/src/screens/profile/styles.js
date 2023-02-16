import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {scaleX, scaleY, normalize} from '../../helperFunction.js';

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
    },
    title: {
        marginTop: scaleY(22),
        flexDirection: 'row',
        // backgroundColor:COLORS.MERCURY,
        titleIC: {
            marginLeft: scaleX(5),
            // backgroundColor:COLORS.BLACK,
        },
        titleText_Space: {
            marginLeft: scaleY(75),
        },
        titleText: {
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(24),
            lineHeight: normalize(27.6),
            // backgroundColor:COLORS.CARDINAL,
        },
    },
    body: {
        // flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: scaleX(315),
        height: scaleY(174),
        marginTop: scaleY(70),
        avatarImg: {
            backgroundColor: COLORS.MERCURY,
            width: 43,
            height: 43,
            borderRadius: 43 / 2,
            // marginLeft: -scaleX(20),
            // overflow: 'hidden',
        },
        avatarSpace: {
            flexDirection: 'row',
            alignItems: 'center',
            width: scaleX(65),
            justifyContent: 'space-between',
            // backgroundColor: COLORS.CARDINAL,
        },
        infoSpace: {
            height: scaleY(60),
            borderBottomColor: COLORS.MERCURY,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        headInfo: {
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(14),
            lineHeight: normalize(13.8),
        },
        contentInfo: {
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(14),
            lineHeight: normalize(13.8),
        },
    },
    footer: {
        flexDirection: 'row-reverse',
        marginLeft: scaleX(30),
        marginTop: scaleY(160),
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
    },
});

export default styles;
