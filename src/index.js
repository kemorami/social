
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './data/state';
export let render = (state)=>{
    // const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    <App data={state}
    dispatch={store.dispatch.bind(store)}
    // qwerty={store.addPosts.bind(store)}
    // asdfgh={store.sendMessage.bind(store)}
    // dialogChange={store.dialogChange.bind(store)}
    // postChange={store.postChange.bind(store)}
    />,
    document.getElementById("root")
);
}
render(store.getState())
store.subscribe(render)