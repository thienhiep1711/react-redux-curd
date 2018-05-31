import React, { Component ,PropTypes } from 'react';
import Header from './common/Header';



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}


App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
