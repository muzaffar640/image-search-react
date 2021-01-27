import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component {
    state = { term:'' };
    onFormSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    } 

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <h1>Well Come to Muzaffar's Image Search Engine</h1>
                        <label>Tell Me What Do You Want To See</label>
                        <input type="text" 
                            value = {this.state.term} 
                            
                            onChange={ e => this.setState({ term: e.target.value })}
                        />
                    </div>                 
                </form>
            </div>
        )
    };
};

export default SearchBar;