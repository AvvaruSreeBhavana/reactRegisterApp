import React from 'react';
import ReactDOM from 'react-dom';
import B from './B.jsx';
import C from './C.jsx';


class A extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         valv: ''
      }

     
   };

  

   handleClick() {
      let val = ReactDOM.findDOMNode(this.refs.child.refs.myInput).value;
       	   this.setState({valv:val});

   }

   render() {
      return (
         <div>
            
			<B ref="child" onClick={() => this.handleClick()} />
			<C data = {this.state.valv} />
           
         </div>
      );
   }
}



export default A;


///https://stackoverflow.com/questions/42711758/reactjs-how-to-access-child-components-refs-from-parent
///https://www.google.co.in/#q=How+to+access+child+component+state+in+parent+component?