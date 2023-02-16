import {StyleSheet} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {normalize, scaleX, scaleY} from '../../helperFunction.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textN: {
        fontSize: normalize(16),
        color: COLORS.BLACK,
        fontWeight: 'bold',
        marginLeft: scaleX(4),
    },
    icon: {},
    buttonSelector: ({isChoosing}) => ({
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 2,
        width: '100%',
        height: scaleY(40),
        borderBottomColor: isChoosing ? COLORS.BLACK : COLORS.MERCURY,
        alignItems: 'center',
    }),
});

export default styles;
