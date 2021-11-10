import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-state';
import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


reportWebVitals();
