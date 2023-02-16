import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="15"
        viewBox="0 0 24 24">
        <Path
            fill="#b5b5b5"
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
        />
    </Svg>
);

export default SvgComponent;
