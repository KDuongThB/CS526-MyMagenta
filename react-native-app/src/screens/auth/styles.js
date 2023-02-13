import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {scaleX, scaleY} from '../../helperFunction.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    header: {
        imageHeader: {
            width: "100%"
        },
        logoHeader: {
            alignSelf: 'center',
            position: 'absolute',
            marginTop: scaleY(44),
        },
    },

    body: {
        width: scaleX(315),
        height: scaleY(428),
        marginTop: scaleY(-150),
        alignSelf: 'center',
        borderRadius: 30,
        backgroundColor: COLORS.WHITE,
        elevation: 7,
        shadowColor: COLORS.BLACK,
        SwitchSelector: {
            marginTop: scaleY(58),
            width: scaleX(236),
            alignSelf: 'center',
        },
    },
    footer: {
        marginTop: scaleY(78),
        flex: 1,
        flexDirection: 'row-reverse',
    },
});

export default styles;
