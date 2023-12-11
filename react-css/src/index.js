import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Item from './basicCss/Item';
import ScssItem from './scss/ScssItem';
import ScItem from './styledComponents/ScItem';
import GlobalStyle from './styledComponents/GlobalStyle';
import TailWindItem from './tailWind/TailWindItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GlobalStyle/> */}
    {/* <App /> */}
    {/* <Item/> */}
    {/* <ScssItem/> */}
    {/* <ScItem/> */}
    <TailWindItem/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
