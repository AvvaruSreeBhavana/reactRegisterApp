import React from 'react';

class App extends React.Component {
   render() {
    var style = {
      color: 'gray',
      fontSize: '30px'
    };

      return (
	  <span>
	     <label for="p_phone" style={style}>
		 Phone:	 
		 </label>
		 <input  type="text" id="p_phone" name="p_phone"/>
		 </span>
      );
   }
}

export default App;