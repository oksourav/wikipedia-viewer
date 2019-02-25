import React, { Component } from 'react';

// Components
import Header from "./components/Header";
import ListComponent from "./components/ListComponent";
import Modal from './components/Modal';

// styles
import "./css/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { ArticleContents } from "./services/GetArticleContents";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      contents: "",
      openModal: false
    };

    this.onView = this.onView.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  onView(title){
    var viewList = {
      'action': 'parse',
      'format': 'json',
      'prop': 'text',
      'page': title
    };
    this.setState({
        loading: true,
        openModal: true
    });
    ArticleContents(viewList).then(result => {
      this.setState({
        contents: result,
        loading: false
      });
    });
  }

  onModalClose(){
    this.setState({
      openModal: false
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-12 app">
                <Header/>
            </div>
            <ListComponent onView={this.onView}/>
            { this.state.openModal ? <Modal contents={this.state.contents} onClose={this.onModalClose} loading={this.state.loading} /> : "" }
        </div>
      </div>
    );
  }
}

export default App;
