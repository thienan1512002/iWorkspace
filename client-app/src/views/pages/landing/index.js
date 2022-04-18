// material-ui
import { styled } from '@mui/material/styles';
import Customization from 'layout/Customization';
import AppBar from './AppBar';
import HeaderPage from './Header';

// project imports

const HeaderWrapper = styled('div')(({ theme }) => ({
    paddingTop: 30,
    overflowX: 'hidden',
    overflowY: 'clip',
    [theme.breakpoints.down('md')]: {
        paddingTop: 42
    }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        <HeaderWrapper id="home">
            <AppBar />
            <HeaderPage />
        </HeaderWrapper>
        <Customization />
    </>
);

export default Landing;
