import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: ""
        };

        this.onSearchDown = this.onSearchDown.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchDown(e){
        if (e.key === "Enter") {
            this.props.search(e.target.value);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            search: nextProps.value
        });
    }
    

    onSearchChange(e){
        this.setState({
            search: e.target.value
        });
    }

    render() {
        return (
            <input type="text" className="form-control" value={this.state.search} placeholder="Search keywords" onChange={e => this.onSearchChange(e)} onKeyDown={e => this.onSearchDown(e)} />
        );
    }
}

export default SearchBox;