// material-ui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid} from '@mui/material';
import { gridSpacing } from 'store/constant';

// assets
import nrilogo from 'assets/images/landing/NRI.png';

// styles
const HeaderImage = styled('img')(({ theme }) => ({
    maxWidth: '85%',
    borderRadius: '20px',
    transform: 'scale(1.7)',
    transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
    [theme.breakpoints.down('lg')]: {
        transform: 'scale(1.2)'
    }
}));

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12} md={7} sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <Box sx={{ position: 'relative', mt: 8.75 }}>
                        <HeaderImage src={nrilogo} alt="iWorkspace" />

                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderPage;
