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
        buttonAdd: {
            alignItems: 'center',
            marginTop: scaleY(19),
        },
        buttonLine: {
            marginTop: scaleY(40),
            width: scaleX(315),
            height: scaleY(1.5),
            backgroundColor: COLORS.MERCURY,
            alignSelf: 'center',
        },
    },
    line: {
        width: SCREEN_WIDTH,
        height: scaleY(1.5),
        backgroundColor: COLORS.NOBEL,
    },
    processBlock: {
        marginHorizontal: scaleX(20),
        marginTop: scaleY(23),
        marginBottom: scaleY(21),
        title: {
            marginLeft: scaleX(17),
            color: COLORS.BLACK,
            fontWeight: '700',
            fontSize: normalize(18),
        },
        content: {
            flexDirection: 'row',
            marginTop: scaleY(12),
            alignItems: 'center',
            addProduct: {
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: scaleX(8),
                plus: {
                    backgroundColor: COLORS.PRIM,
                    width: scaleX(72),
                    height: scaleY(72),
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                name: {
                    color: COLORS.BLACK,
                    marginLeft: scaleX(16),
                },
            },
        },
    },
    bottom: {
        marginVertical: scaleY(20),
        marginHorizontal: scaleX(17),
        titleText: {
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(20),
            lineHeight: normalize(22),
            marginTop: scaleY(28),
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
        timeUse: {
            marginBottom: scaleY(20),
        },
        dailyUseSpace: {
            flexDirection: 'row',
            marginTop: scaleY(16),
            dateUseText: {},
        },
    },
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        block: {
            width: scaleX(300),
            height: scaleY(200),
            backgroundColor: COLORS.WHITE,
            borderRadius: 20,
            textInput: {
                color: COLORS.BLACK,
                marginHorizontal: scaleX(20),
                marginTop: scaleY(20),
                borderBottomColor: COLORS.TORCH_RED,
                borderBottomWidth: 1,
                fontSize: normalize(16),
            },
            buttons: {
                flexDirection: 'row',
                marginTop: scaleY(40),
                marginHorizontal: scaleX(20),
                justifyContent: 'space-between',
                ignore: {
                    backgroundColor: COLORS.WHITE,
                    borderColor: COLORS.TORCH_RED,
                    borderWidth: 1,
                    borderRadius: 30,
                    width: scaleX(100),
                    height: scaleX(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                    text: {
                        color: COLORS.TORCH_RED,
                        fontSize: normalize(16),
                    },
                },
                accept: {
                    backgroundColor: COLORS.TORCH_RED,
                    borderRadius: 30,
                    width: scaleX(150),
                    height: scaleX(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                    text: {
                        color: COLORS.WHITE,
                        fontSize: normalize(16),
                    },
                },
            },
        },
    },
});

export default styles;
