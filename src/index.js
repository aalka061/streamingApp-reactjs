import React from 'react';
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';


const API_KEY = 'AIzaSyB0PF2Ljhh4-vhJuaO5jTzzmtOktL5VrNw';

YTsearch({key: API_KEY, term:'realMadrid'}, function (videos) {
    console.log(videos)
});


const App = function() {

    return (
        <div>
            <SearchBar/>
        </div>
    );
        
};

ReactDOM.render(<App/>, document.querySelector('.container'));

