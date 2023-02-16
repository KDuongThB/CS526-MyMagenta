import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {scaleX, scaleY, normalize} from '../../helperFunction.js';
import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.CARDINAL,
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
                color: COLORS.WHITE,
                fontWeight: '700',
            },
        },
    },
    body: {
        width: SCREEN_WIDTH,
        flex: 1,
        marginTop: scaleY(33.83),
        alignSelf: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: COLORS.WHITE,
        justifyContent: 'space-between',
        footer: {
            height: scaleY(80),
            flexDirection: 'row',
            justifyContent: 'space-around',
            button: {
                backgroundColor: COLORS.CARDINAL,
                borderRadius: 20,
                width: scaleX(144),
                height: scaleY(36),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            },
            buttonText: {
                color: COLORS.WHITE,
                fontSize: normalize(14),
                fontWeight: '700',
            },
        },
        loginSpace: {
            marginHorizontal: scaleY(30),
            marginTop: scaleY(10),
            borderBottomColor: COLORS.TORCH_RED,
            borderBottomWidth: 1,

            loginText: {
                color: COLORS.NOBEL,
                fontSize: normalize(18),
            },
        },
    },
    line: {
        width: SCREEN_WIDTH,
        height: scaleY(1.5),
        backgroundColor: COLORS.NOBEL,
    },
});

export default styles;
