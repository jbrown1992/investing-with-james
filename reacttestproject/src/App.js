import React, { Component } from 'react';
import TickerForm from './components/TickerForm'
import StockInformation from './components/StockInformation'


export default class App extends Component {
 
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {text: ''};
      }
      
      handleTextChange(newText) {
        this.setState({text: newText});
      }

      render() {
        return (
            <React.Fragment>
              <TickerForm text={this.state.text} 
                 handleTextChange={this.handleTextChange}/>
              <StockInformation text={this.state.text} />
            </React.Fragment>
        );
      }
    }