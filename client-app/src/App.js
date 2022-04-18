import Routes from 'routes';
import ThemeCustomization from 'themes';

// auth provider
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// ==============================|| APP ||============================== //
const App = () => (
    <>
        <ThemeCustomization>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeCustomization>
    </>
);

export default App;
