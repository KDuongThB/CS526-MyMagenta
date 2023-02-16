import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {scaleX, scaleY, normalize} from '../../helperFunction.js';
import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
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
        showStepData: {
            width: scaleX(335),
            height: scaleY(94),
            backgroundColor: COLORS.WHITE,
            marginTop: scaleY(30),
            borderRadius: 20,
            alignSelf: 'center',
        },
        StepDataTitle: {
            marginLeft: scaleY(40),
            marginTop: scaleY(5),
            color: COLORS.CARDINAL,
            fontFamily: 'Arial',
            fontWeight: '700',
            fontSize: normalize(16),
            lineHeight: normalize(18.4),
            // textTransform: 'uppercase',
        },
        stepSpaceInfo: {
            marginTop: scaleY(10),
            flexDirection: 'row',
        },
        logo: {
            backgroundColor: COLORS.WHITE,
            borderRadius: 50,
            width: scaleX(50),
            height: scaleY(50),
        },
        ProductDataName: {
            alignSelf: 'center',
            color: COLORS.BLACK,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(12),
            lineHeight: normalize(13.8),
            width: scaleY(335),
            // textTransform: 'uppercase',
        },
        checkbox: {
            marginLeft: scaleX(13),
            height: 20,
            width: 20,
            borderRadius: 3,
            borderColor: COLORS.MERCURY,
            borderWidth: 1,
            alignSelf: 'center',
        },
    },
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        // height:scaleY(260),
        showCalendar: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 4,
            marginTop: scaleY(SCREEN_HEIGHT - 274),
        },
    },
});

export default styles;
