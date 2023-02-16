import * as React from 'react';
import Svg, {Path, G, Defs, Rect, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
    <Svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_23_198)">
            <Path
                d="M6.5625 0C6.81114 0 7.0496 0.0987721 7.22541 0.274587C7.40123 0.450403 7.5 0.68886 7.5 0.9375V1.875H22.5V0.9375C22.5 0.68886 22.5988 0.450403 22.7746 0.274587C22.9504 0.0987721 23.1889 0 23.4375 0C23.6861 0 23.9246 0.0987721 24.1004 0.274587C24.2762 0.450403 24.375 0.68886 24.375 0.9375V1.875H26.25C27.2446 1.875 28.1984 2.27009 28.9016 2.97335C29.6049 3.67661 30 4.63044 30 5.625V26.25C30 27.2446 29.6049 28.1984 28.9016 28.9016C28.1984 29.6049 27.2446 30 26.25 30H3.75C2.75544 30 1.80161 29.6049 1.09835 28.9016C0.395088 28.1984 0 27.2446 0 26.25V5.625C0 4.63044 0.395088 3.67661 1.09835 2.97335C1.80161 2.27009 2.75544 1.875 3.75 1.875H5.625V0.9375C5.625 0.68886 5.72377 0.450403 5.89959 0.274587C6.0754 0.0987721 6.31386 0 6.5625 0V0ZM1.875 7.5V26.25C1.875 26.7473 2.07254 27.2242 2.42417 27.5758C2.77581 27.9275 3.25272 28.125 3.75 28.125H26.25C26.7473 28.125 27.2242 27.9275 27.5758 27.5758C27.9275 27.2242 28.125 26.7473 28.125 26.25V7.5H1.875Z"
                fill="#C81B48"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_23_198">
                <Rect width="30" height="30" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default SvgComponent;
