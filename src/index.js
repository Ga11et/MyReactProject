import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-state';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import  AppCopy  from './AppСopy';
import 'antd/dist/antd.css';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppCopy />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


reportWebVitals();
