import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
       value: ""
      }
    }
 
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.value.trim() === "") {
        alert('inserisci qualcosa');
        return
      }
      this.props.submit(this.state.value)
      this.setState({
        value: ""
      })
    }
 
    onChangeText = (e) => {
     
      this.setState({
        value: e.target.value
      })
      
    }
 
   render() {
     return (
       <form onSubmit = {this.handleSubmit}>
         <input className='input' type="text" value={this.state.value} placeholder="aggiungi todo" onChange={this.onChangeText}/>
       </form>
     )
   }
 }

 export default Form;