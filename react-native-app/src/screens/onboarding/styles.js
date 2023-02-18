import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';
import COLORS from '../../assets/constants/colors.js';
import {scaleX, scaleY, normalize} from '../../helperFunction.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    linearGradient: {
        flex: 1,
    },

    header: {
        alignItems: 'center',
        marginTop: scaleY(96),

        logoHeader: {},
        textBrand: {
            color: COLORS.WHITE,
            fontSize: normalize(30),
            marginTop: scaleY(8),
            fontFamily: 'AllertaStencil-Regular',
            textTransform: 'uppercase',
        },
        textDescription: {
            // Using css inline due to cannot set fontWeight
        },
    },
    footer: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
});

export default styles;
