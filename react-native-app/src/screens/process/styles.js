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
        title: {
            flexDirection: 'row',
            marginTop: scaleY(42),
            height: scaleY(40),
            text: {
                marginLeft: scaleX(30),
                fontSize: normalize(24),
                color: COLORS.BLACK,
                fontWeight: '700',
            },
        },
    },
    activeProcess: {
        title: {
            text: {
                color: COLORS.BLACK,
                marginLeft: scaleX(30),
                fontSize: normalize(20),
                fontWeight: '700',
                marginTop: scaleY(40),
                marginBottom: scaleY(30),
            },
        },
        body: {
            items: {
                align: {
                    flexDirection: 'row',
                },
                backgroundColor: COLORS.CARDINAL,
                marginVertical: scaleY(10),
                marginHorizontal: scaleX(30),
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: scaleY(72),
                info: {
                    marginLeft: scaleX(14),
                    name: {
                        color: COLORS.WHITE,
                        fontSize: normalize(16),
                        fontWeight: '700',
                    },
                    parts: {
                        color: COLORS.WHITE,
                        fontSize: normalize(12),
                        fontWeight: '400',
                    },
                    day: {
                        color: COLORS.WHITE,
                        fontSize: normalize(12),
                        fontWeight: '700',
                    },
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                },
                step: {
                    color: COLORS.WHITE,
                    marginRight: scaleX(14),
                    alignSelf: 'center',
                    fontSize: normalize(12),
                    fontWeight: '400',
                },
            },
        },
        button: {
            alignSelf: 'center',
            marginTop: scaleY(30),
        },
    },
    recommendProcess: {
        title: {
            text: {
                color: COLORS.BLACK,
                marginLeft: scaleX(30),
                fontSize: normalize(20),
                fontWeight: '700',
                marginTop: scaleY(40),
                marginBottom: scaleY(30),
            },
        },
    },
    icon: {
        alignSelf: 'center',
        marginLeft: scaleX(14),
    },
});

export default styles;
