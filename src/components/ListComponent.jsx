import React, { Component } from 'react';

// 
import Random from "./Random";
import SearchBox from "./SearchBox";
import ResultList from "./ResultList";
import Spinner from "./Spinner";

// Services
import { SearchContents } from "../services/GetSearchContents";
import { RandomContents } from "../services/GetRandomContents";

class ListComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: {},
            loading: false,
            resultType: "",
            value: ""
        };

        this.searchChange = this.searchChange.bind(this);
        this.randomSearchChange = this.randomSearchChange.bind(this);
    }

    randomSearchChange(){        
        var randomDataList = {
            'action': 'query',
            'generator': 'random',
            'grnnamespace': 0,
            'prop': 'extracts',
            'format': 'json'
        };
        this.setState({
            loading: true,
            value: ""
        });        
        RandomContents(randomDataList).then(result => {
            this.setState({
                list: [result],
                resultType: "extract",
                loading: false
            });
        });
    }

    searchChange(term){
        var dataList = {
            'action': 'query',
            'format': 'json',
            'list': 'search',
            'srprop': 'snippet',
            'srlimit': 9,
            'srsearch': term
        };
        this.setState({
            loading: true,
            value: term
        });
        SearchContents(dataList).then(result => {
            this.setState({
                list: result,
                resultType: "snippet",
                loading: false
            });
        });
    }

    render() {        
        return (
            <div className="col-sm-12 list-container">
                <div className="col random-container">
                    <Random randomSearch={this.randomSearchChange} />
                </div>
                <div className="col">
                    <SearchBox search={this.searchChange} value={this.state.value} />
                </div>
                <div className="col-sm-12">
                    {
                        this.state.loading ? 
                            <div className="spinner-container">
                                <Spinner />
                            </div> :
                            <ResultList list={this.state.list} onView={this.props.onView} resultType={this.state.resultType} />
                    }
                </div>
            </div>
        );
    }
}

export default ListComponent;