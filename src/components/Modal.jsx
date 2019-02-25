import React, { Component } from 'react';
import Spinner from './Spinner';

class Modal extends Component {

    constructor(props){
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose(e){
        this.props.onClose();
    }

    render() {
        return (
            <div className="modal-container">
                <button className="btn btn-danger" onClick={e => this.onClose(e)}>Close</button>
                <div>
                    { this.props.loading ? <Spinner /> : <div dangerouslySetInnerHTML={{__html: this.props.contents}} /> }
                </div>
            </div>
        );
    }
}

export default Modal;