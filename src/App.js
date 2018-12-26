import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import ControlPanel from './components/ControlPanel';
import ViewPanel from './components/ViewPanel';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      types: 'p',
      paras: 2,
      html: false,
      range:{
        low: 10,
        high: 20
      },
      text: ''
    }
  }

  componentWillMount() {
    this.getRandomText();
  }

  updateText = (text)=> {
    this.setState({
      text
    })
    //console.log(this.state);
  }

  setUpdates = (obj)=> {

    const {paras, types} = obj;
    const {range} = this.state;
    
    
    range.low = obj.range.low;
    range.high = obj.range.high;
    setTimeout (()=> {
      this.setState({
        types,
        paras,
        html: obj.html,
        range: range
      })
    },10);
    
    this.getRandomText();
  }
  
  getRandomText = ()=> {
    
    axios.get(`http://www.randomtext.me/api/lorem/${this.state.types}-${this.state.paras}/${this.state.range.low}-${this.state.range.high}`)
      .then((res) => {
        this.updateText(res.data.text_out);
      })
      .catch((err) => {
        console.log(err);
        
      })
  }

  

  render() {
    return (
      
      <div className="container">
      <div className="row">
          <ControlPanel setUpdates={this.setUpdates}/>
          <ViewPanel newText={this.state.text} isHtml={this.state.html}/>
        </div>
      </div>
    );
  }
}

export default App;
