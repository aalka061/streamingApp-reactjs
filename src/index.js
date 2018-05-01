import React from 'react';
import ReactDOM from 'react-dom'; 

const App = function(greeting) {

    return <div>{greeting = greeting || "hello"}</div>; 
};

ReactDOM.render(App('hi'), document.querySelector('.container'));

ReactDOM.render(App(), document.querySelector('.container_2'));

