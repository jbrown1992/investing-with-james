import React,{ Component } from 'react';
  
class TickerForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      this.props.handleTextChange(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

// class TickerForm extends Component {

//     constructor(props) {
//     super(props);
//     this.handleTextChange = this.handleTextChange.bind(this);
// }
  
// handleTextChange(e){
//     this.props.handleTextChange(e.target.value);
// }
  
// render() {
//     return (
//         <input value={this.props.ticker} 
//                onChange={this.handleTextChange} />
//     );
// }
// }
      
export default TickerForm;