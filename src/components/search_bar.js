import React, {Component} from 'react'


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: "Starting value"}
    };

    
    
    //only update state using setState
    // every time state is reset the component gets rerendered
    // any change on the input gets the state to be updated
    // the state should tell the input what the current value should be not 
    // the other way around list i first did .
    // thus, input should commanded by state to change 
    render(){
       return (
        <div>
            <div>
                
                <input value = {this.state.term}
                 onChange={event => this.setState({term : event.target.value})} />
            </div>
            
        </div>

       );
    }

    // onInputChange(event){
    //     console.log(event.target)
    // }
}

export default SearchBar;