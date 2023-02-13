import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors';
import {normalize, scaleY} from '../../helperFunction';

const styles = StyleSheet.create({
    header: {
        // backgroundColor: COLORS.BLACK,
        alignItems: 'center',

        logoHeader: {},
        textBrand: {
            color: COLORS.WHITE,
            fontSize: normalize(20),
            fontFamily: 'AllertaStencil-Regular',
            textTransform: 'uppercase',
        },
        textDescription: {
            // Using css inline due to cannot set fontWeight
        },
    },
});

export default styles;
