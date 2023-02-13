import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

export const scaleX = number => {
    const designDeviceWidth = parseInt(375);
    return (number / designDeviceWidth) * SCREEN_WIDTH;
};

export const scaleY = number => {
    const designDeviceHeight = parseInt(812);
    return (number / designDeviceHeight) * SCREEN_HEIGHT;
};

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}
