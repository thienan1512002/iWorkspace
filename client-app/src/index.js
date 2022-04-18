import ReactDOM from 'react-dom';

// project imports
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import reportWebVitals from 'reportWebVitals';
import { ConfigProvider } from 'contexts/ConfigContext';
import { Provider } from 'react-redux';
import { store } from 'store';
// style + assets
import 'assets/scss/style.scss';
import { BrowserRouter } from 'react-router-dom';
import Locales from 'ui-component/Locales';

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.render(
    <Provider store={store}>
        <Locales>
            <ConfigProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </Locales>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
