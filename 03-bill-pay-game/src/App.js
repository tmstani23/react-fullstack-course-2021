import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {GlobalContext} from './context/';
import StageIntro from './components/stage_intro';
import StageResult from './components/stage_result';


class App extends Component {
  
  static contextType = GlobalContext;  
  
  
  render() {
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who pays the bill?</h1>
          {
            this.context.state.stage === 1 ?
              <StageIntro /> : <StageResult />
          }
        </div>
      </div>
    );
  }

}

export default App;
