import React, { Component } from 'react';
import { isEmpty } from "lodash";

class ResultList extends Component {

    constructor(props){
        super(props);

        this.onView = this.onView.bind(this);
    }

    onView(e, title){
        e.preventDefault();
        this.props.onView(title);
    }    
    
    showList(data){
        return data.map((value, index)=>{
            var articleUrl = "http://en.wikipedia.org/wiki/"+value.title.replace(/\s/g, "_");
            return (
                <li key={value.pageid}>
                    <p className="timeline-date">{value.pageid}</p>
                    <div className="timeline-content">
                        <h3>{value.title}</h3>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: value[this.props.resultType]}} />
                            {
                                this.props.resultType === "snippet" ? <a target="_blank" onClick={e=> this.onView(e, value.title)} href={articleUrl}> more ...</a> : ""
                            }
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                {!isEmpty(this.props.list) ? (
                    <ul className="timeline">
                        {this.showList(this.props.list)}
                    </ul>
                ) : ""}
            </div>
       );
    }
}

export default ResultList;