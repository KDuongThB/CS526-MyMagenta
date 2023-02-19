import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import COLORS from '../../assets/constants/colors.js';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';

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
        text: {
            marginTop: scaleY(42),
            marginLeft: scaleX(30),
            fontSize: normalize(24),
            color: COLORS.BLACK,
            fontWeight: '700',
        },
    },
    button: {
        marginTop: scaleY(37),
        alignSelf: 'center',
        height: scaleY(52),
    },
    body: {
        quatity: {
            color: COLORS.GRAY,
            marginLeft: scaleX(30),
            marginTop: scaleY(4),
        },
    },
    productContainer: {
        marginHorizontal: scaleY(30),
        marginVertical: scaleY(10),
        item: {
            marginVertical: scaleX(16),
            borderRadius: 10,
            product: {
                flexDirection: 'row',
                logo: {
                    backgroundColor: COLORS.WHITE,
                    borderRadius: 50,
                    width: scaleX(50),
                    height: scaleY(50),
                },
                name: {
                    flexDirection: 'column',
                    marginLeft: scaleY(14),
                    width: scaleY(261),
                    height: scaleX(60),
                    justifyContent: 'space-between',
                    text: {
                        color: COLORS.BLACK,
                        fontSize: normalize(14),
                    },
                    buttons: {
                        flexDirection: 'row',
                        // backgroundColor: COLORS.GRAY,
                        marginRight: scaleY(100),
                        justifyContent: 'space-between',
                        button: {
                            backgroundColor: COLORS.CARDINAL,
                            borderRadius: 30,
                            width: scaleY(84),
                            height: scaleX(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: scaleY(10),
                            text: {
                                color: COLORS.WHITE,
                                fontSize: normalize(12),
                            },
                        },
                    },
                },
            },
            buttonRemove: {
                alignItems: 'flex-end',
                text: {
                    color: COLORS.GRAY,
                    fontSize: normalize(12),
                },
            },
        },
    },
});

export default styles;
