import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import {store, passActionsToProps, passStateToProps} from "./redux/state";
import App from './App';
import {Previewer} from "./previewer/previewer";

const Container = connect(passStateToProps, passActionsToProps)(Previewer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Container/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

