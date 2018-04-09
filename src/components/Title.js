import React from 'react';

class Title extends React.Component {
	render() {
	    return (
	        <div className={Title}>
	            <h2>To jest tytuł.</h2>
	            <p>{props.number}</p>
	        </div>    
	    );
	}
}

export default Title;