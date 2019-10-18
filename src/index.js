import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Detail from './Detail';
import { noteFnc } from './reducers/NoteReducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(noteFnc, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const stack = 
<Provider store={store}>
<Router>
    <Route exact path="/" component = {App}></Route>
    <Route path="/detail" component = {Detail}></Route>
</Router>
</Provider>

ReactDOM.render(stack, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
