import {StyleSheet} from 'react-native';
import COLORS from '../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../helperFunction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderTopRightRadius: 20,
    },
    body: {
        textBody: {
            color: COLORS.WHITE,
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: normalize(16),
            lineHeight: normalize(18.1),
        },
    },
});

export default styles;
