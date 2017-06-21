import React from 'react';
import ReactDOM from 'react-dom';

class B extends React.Component {

  constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
           let val = ReactDOM.findDOMNode(this.refs.myInput).value;
      this.setState({data:val});
   }
   
  
 render() {
      return (
         <div>
		 <input type = "text"  ref="myInput" value = {this.state.data} onChange = {this.updateState} />
            <button onClick={this.props.onClick} value={this.state.data} >COPY TEXT</button>
		
           
         </div>
      );
   }
}

export default B;