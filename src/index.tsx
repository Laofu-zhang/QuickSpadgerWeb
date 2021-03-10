/*
 * @Author: zhangyun
 * @Date: 2021-03-05 09:56:56
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-09 13:50:24
 * @Desc: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import './style/normarlizi.scss';
import './style/transition.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
