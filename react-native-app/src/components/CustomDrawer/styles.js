import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../../helperFunction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderTopRightRadius: 20,
    },
    header: {
        container: {
            marginTop: scaleY(-5),
            borderTopRightRadius: 20,
            // backgroundColor:COLORS.CABARET
        },
        height: scaleY(300),
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        avtImage: {
            image: {
                width: normalize(84),
                height: normalize(84),
                borderRadius: 100,
                alignSelf: 'center',
            },
        },
        textName: {
            marginTop: scaleY(15),
            color: COLORS.WHITE,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(22),
            lineHeight: normalize(24),
            alignSelf: 'center',
        },
        textEmail: {
            marginTop: scaleY(5),
            color: COLORS.WHITE,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(16),
            lineHeight: normalize(18.1),
        },
    },
    body: {
        flex: 1,
        paddingTop: scaleY(20),
        textBody: {
            color: COLORS.WHITE,
        },
    },
    footer: {
        dividedLine: {
            padding: 20,
            borderTopWidth: 1,
            borderTopColor: COLORS.MERCURY,
        },
        textSignOut: {
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(16),
            lineHeight: normalize(18.1),
            alignSelf: 'center',
            marginLeft: scaleX(8),
            color: COLORS.CARDINAL,
        },
        icStyle: {
            color: COLORS.CARDINAL,
        },
        touchStyle: {
            flexDirection: 'row',
        },
    },
});

export default styles;
