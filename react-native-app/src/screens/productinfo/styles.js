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
    product: {
        marginTop: scaleY(22),
        logo: {
            height: scaleY(165),
            width: scaleX(165),
            alignSelf: 'center',
        },
        name: {
            color: COLORS.BLACK,
            fontWeight: '700',
            fontSize: normalize(18),
            marginHorizontal: scaleX(20),
            marginVertical: scaleY(14),
        },
        button: {
            backgroundColor: COLORS.TORCH_RED,
            width: scaleX(144),
            height: scaleY(36),
            borderRadius: 30,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            text: {
                color: COLORS.WHITE,
                fontWeight: '700',
                fontSize: normalize(14),
            },
        },
    },
    productInfo: {
        detail: {
            marginHorizontal: scaleX(20),
            title: {
                color: COLORS.BLACK,
                fontWeight: '700',
                fontSize: normalize(16),
                marginTop: scaleY(24),
            },
            content: {
                color: COLORS.SCORPION,
                fontSize: normalize(14),
                marginTop: scaleY(10),
            },
        },
    },
    padding: {
        height: scaleY(164),
    },
});

export default styles;
