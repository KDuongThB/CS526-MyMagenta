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
        selection: {
            justifyContent: 'center',
            width: '100%',
            height: scaleY(74),
            backgroundColor: COLORS.WHITE,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            elevation: 4,
            shadowColor: COLORS.BLACK,
            avt: {
                image: {
                    width: normalize(43),
                    height: normalize(43),
                    borderRadius: 100,
                    position: 'absolute',
                    top: 0,
                    marginTop: scaleY(-3),
                    marginLeft: scaleY(30),
                    zIndex: 1,
                    objectFit: 'cover',
                    aspectRatio: 1,
                },
            },
            calendar: {
                flexDirection: 'row',
                marginLeft: scaleX(92),
                value: {
                    justifyContent: 'center',
                    text: {
                        flexDirection: 'column',
                        position: 'absolute',
                        alignSelf: 'center',
                        color: COLORS.CARDINAL,
                        fontWeight: '700',
                        fontSize: normalize(16),
                    },
                },
                info: {
                    flexDirection: 'column',
                    marginLeft: scaleX(7),
                    date: {
                        flexDirection: 'row',
                        text: {
                            fontSize: normalize(15),
                            fontWeight: '700',
                            color: COLORS.CARDINAL,
                        },
                        button: {
                            marginTop: scaleY(-3),
                            marginLeft: scaleX(7),
                        },
                    },
                    monthYear: {
                        fontSize: normalize(15),
                        // fontWeight: '700',
                        color: COLORS.BLACK,
                    },
                },
            },
        },
    },
    title: {
        marginTop: scaleY(22),
        marginLeft: scaleX(30),
        text: {
            fontSize: normalize(17),
            color: COLORS.CARDINAL,
            fontWeight: '700',
        },
    },
    switchButton: {
        flexDirection: 'row',
        marginTop: scaleY(12),
    },
    body: {
        imageEmpty: {
            alignSelf: 'center',
            marginTop: scaleY(65),
        },
        text: {
            marginTop: scaleY(26),
            alignSelf: 'center',
            color: COLORS.BLACK,
            fontSize: normalize(12),
            fontWeight: '700',
        },
        buttonAdd: {
            height: scaleY(52),
            marginTop: scaleY(31),
            alignSelf: 'center',
        },
    },
});

export default styles;
