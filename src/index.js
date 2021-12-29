import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    {/* Provider để ép React khởi động cùng với Redux, store nạp vào nơi lưu trữ dữ liệu*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
