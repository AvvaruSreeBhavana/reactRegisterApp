import React from 'react';
import ReactDOM from 'react-dom';

class C extends React.Component {



 render() {
      return (
         <div>
		 {this.props.data}
         </div>
      );
   }
}

export default C;