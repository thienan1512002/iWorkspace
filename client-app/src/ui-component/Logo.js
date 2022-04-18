// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
         *
         */
        <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M46.16,18.26c3.06,4.64,7.28,10.1,11.91,16H47.53C44,28.7,39.24,22.11,35.39,17.33c5.16-1.15,9.35-3.31,9.35-7.47,0-3-2.16-5.36-7.33-5.36-2.05,0-3.76.14-5.16.14-.14,4.11-.19,8.37-.19,12.62,0,5.8.32,11.59.54,17H25A252.11,252.11,0,0,0,6.56,11.39c-.1,5.94.06,14.75.71,22.86H0c.24-5.4.55-11.19.55-17S.24,5.67,0,.27H8.78A248.16,248.16,0,0,0,25.71,21.49c0-5.86-.12-13.83-.73-21.22C29.15.36,35.31,0,40.33,0S49.49.4,52.2,3.09A7.63,7.63,0,0,1,54.33,8.7C54.33,12.68,51.3,16.38,46.16,18.26ZM68,.27c-.24,5.4-.56,11.2-.56,17s.32,11.59.56,17H58.84c.23-5.4.56-11.19.56-17s-.33-11.59-.56-17Z"
                fill={theme.palette.mode === 'dark' ? '#0c419a' : '#0c419a'}
            />
        </svg>
    );
};

export default Logo;
