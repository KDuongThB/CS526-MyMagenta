import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
    <Svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M22.9333 20.1C22.6 19.9667 22.3556 19.7276 22.2 19.3827C22.0444 19.0387 22.0333 18.7 22.1667 18.3667C22.3222 17.9889 22.4333 17.5942 22.5 17.1827C22.5667 16.772 22.6 16.3 22.6 15.7667C22.6 14.1 21.9667 12.6164 20.7 11.316C19.4333 10.0164 17.9333 9.36667 16.2 9.36667C15.7556 9.36667 15.3169 9.4 14.884 9.46667C14.4502 9.53333 14.0222 9.65556 13.6 9.83333C13.2444 9.98889 12.9 9.98889 12.5667 9.83333C12.2333 9.67778 12 9.42222 11.8667 9.06667C11.7333 8.71111 11.7391 8.36667 11.884 8.03333C12.028 7.7 12.2778 7.46667 12.6333 7.33333C13.2111 7.11111 13.7889 6.94978 14.3667 6.84933C14.9444 6.74978 15.5556 6.7 16.2 6.7C18.7111 6.7 20.8498 7.58889 22.616 9.36667C24.3831 11.1444 25.2667 13.2778 25.2667 15.7667C25.2667 16.4778 25.228 17.1111 25.1507 17.6667C25.0724 18.2222 24.9222 18.7889 24.7 19.3667C24.5667 19.7 24.328 19.9333 23.984 20.0667C23.6391 20.2 23.2889 20.2111 22.9333 20.1ZM16 25.3333C13.4 25.3333 11.1947 24.4276 9.384 22.616C7.57244 20.8053 6.66667 18.6 6.66667 16C6.66667 15.0889 6.80533 14.1724 7.08267 13.2507C7.36089 12.328 7.78889 11.4556 8.36667 10.6333C8.47778 10.4556 8.628 10.3164 8.81733 10.216C9.00578 10.1164 9.2 10.0667 9.4 10.0667C9.64445 10.0444 9.88356 10.1 10.1173 10.2333C10.3502 10.3667 10.5222 10.5444 10.6333 10.7667C11.8778 13.0333 13.4 15.0609 15.2 16.8493C17 18.6387 19.0333 20.1333 21.3 21.3333C21.5 21.4444 21.6609 21.5942 21.7827 21.7827C21.9053 21.972 21.9778 22.1889 22 22.4333C22.0222 22.6556 21.9778 22.8667 21.8667 23.0667C21.7556 23.2667 21.6111 23.4333 21.4333 23.5667C20.6111 24.1444 19.7391 24.5836 18.8173 24.884C17.8947 25.1836 16.9556 25.3333 16 25.3333ZM16 22.6667C16.3111 22.6667 16.6169 22.6498 16.9173 22.616C17.2169 22.5831 17.5333 22.5111 17.8667 22.4C16.2 21.3333 14.6778 20.1111 13.3 18.7333C11.9222 17.3556 10.6889 15.8444 9.6 14.2C9.51111 14.5111 9.44444 14.8111 9.4 15.1C9.35556 15.3889 9.33333 15.6889 9.33333 16C9.33333 17.8889 9.99467 19.4667 11.3173 20.7333C12.6391 22 14.2 22.6444 16 22.6667ZM16 4C15.6222 4 15.3058 3.872 15.0507 3.616C14.7947 3.36089 14.6667 3.04444 14.6667 2.66667V1.33333C14.6667 0.955556 14.7947 0.638667 15.0507 0.382667C15.3058 0.127556 15.6222 0 16 0C16.3778 0 16.6947 0.127556 16.9507 0.382667C17.2058 0.638667 17.3333 0.955556 17.3333 1.33333V2.66667C17.3333 3.04444 17.2058 3.36089 16.9507 3.616C16.6947 3.872 16.3778 4 16 4ZM16 32C15.6222 32 15.3058 31.872 15.0507 31.616C14.7947 31.3609 14.6667 31.0444 14.6667 30.6667V29.3333C14.6667 28.9556 14.7947 28.6391 15.0507 28.384C15.3058 28.128 15.6222 28 16 28C16.3778 28 16.6947 28.128 16.9507 28.384C17.2058 28.6391 17.3333 28.9556 17.3333 29.3333V30.6667C17.3333 31.0444 17.2058 31.3609 16.9507 31.616C16.6947 31.872 16.3778 32 16 32ZM24.4667 7.5C24.2 7.23333 24.0667 6.91644 24.0667 6.54933C24.0667 6.18311 24.2 5.86667 24.4667 5.6L25.4 4.66667C25.6667 4.4 25.9889 4.26667 26.3667 4.26667C26.7444 4.26667 27.0667 4.4 27.3333 4.66667C27.6 4.93333 27.728 5.24978 27.7173 5.616C27.7058 5.98311 27.5667 6.3 27.3 6.56667L26.3667 7.5C26.1 7.76667 25.7831 7.9 25.416 7.9C25.0498 7.9 24.7333 7.76667 24.4667 7.5ZM4.7 27.3C4.43333 27.0333 4.3 26.7169 4.3 26.3507C4.3 25.9836 4.43333 25.6667 4.7 25.4L5.63333 24.4667C5.87778 24.2222 6.17778 24.1 6.53333 24.1C6.88889 24.1 7.2 24.2222 7.46667 24.4667C7.73333 24.7111 7.87778 25.0222 7.9 25.4C7.92222 25.7778 7.8 26.1 7.53333 26.3667L6.6 27.3C6.33333 27.5667 6.01689 27.7 5.65067 27.7C5.28356 27.7 4.96667 27.5667 4.7 27.3ZM29.3333 17.3333C28.9556 17.3333 28.6391 17.2053 28.384 16.9493C28.128 16.6942 28 16.3778 28 16C28 15.6222 28.128 15.3053 28.384 15.0493C28.6391 14.7942 28.9556 14.6667 29.3333 14.6667H30.6667C31.0444 14.6667 31.3609 14.7942 31.616 15.0493C31.872 15.3053 32 15.6222 32 16C32 16.3778 31.872 16.6942 31.616 16.9493C31.3609 17.2053 31.0444 17.3333 30.6667 17.3333H29.3333ZM1.33333 17.3333C0.955556 17.3333 0.639111 17.2053 0.384 16.9493C0.128 16.6942 0 16.3778 0 16C0 15.6222 0.128 15.3053 0.384 15.0493C0.639111 14.7942 0.955556 14.6667 1.33333 14.6667H2.66667C3.04444 14.6667 3.36133 14.7942 3.61733 15.0493C3.87244 15.3053 4 15.6222 4 16C4 16.3778 3.87244 16.6942 3.61733 16.9493C3.36133 17.2053 3.04444 17.3333 2.66667 17.3333H1.33333ZM25.4 27.3L24.4667 26.3667C24.2222 26.1222 24.1 25.8222 24.1 25.4667C24.1 25.1111 24.2222 24.8 24.4667 24.5333C24.7111 24.2667 25.0222 24.1222 25.4 24.1C25.7778 24.0778 26.1 24.2 26.3667 24.4667L27.3 25.4C27.5667 25.6667 27.6947 25.9778 27.684 26.3333C27.6724 26.6889 27.5444 27 27.3 27.2667C27.0556 27.5333 26.7444 27.672 26.3667 27.6827C25.9889 27.6942 25.6667 27.5667 25.4 27.3ZM5.63333 7.5L4.7 6.56667C4.43333 6.3 4.30533 5.99422 4.316 5.64933C4.32756 5.30533 4.45556 5 4.7 4.73333C4.94444 4.46667 5.25556 4.32222 5.63333 4.3C6.01111 4.27778 6.33333 4.4 6.6 4.66667L7.53333 5.6C7.8 5.86667 7.93333 6.18311 7.93333 6.54933C7.93333 6.91644 7.8 7.23333 7.53333 7.5C7.26667 7.76667 6.95022 7.9 6.584 7.9C6.21689 7.9 5.9 7.76667 5.63333 7.5Z"
            fill={props.color}
        />
    </Svg>
);

export default SvgComponent;
