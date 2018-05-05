import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyB0PF2Ljhh4-vhJuaO5jTzzmtOktL5VrNw';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            term: 'Galaxy 8'
        
        };

      this.videSearch('Galaxy 8')

       
    };

    videSearch(term) {
          
        YTsearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]  
            });
        })
    }
    render(){
        return (
            <div>
                <SearchBar onChangeTerm =
                 {
                     (term)=> 
                         {
                             this.videSearch(term);
                            
                         }
                 }/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                videos={this.state.videos} 
                onVideoSelect = {(selectedVideo) =>{this.setState({selectedVideo})}}/>
            </div>

        )
      
    };
        
};

ReactDOM.render(<App/>, document.querySelector('.container'));

