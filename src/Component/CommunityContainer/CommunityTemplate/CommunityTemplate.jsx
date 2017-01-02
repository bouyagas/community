import React from 'react';
import './CommunityTemplate.css'

const CommunityTemplate = (props) => {
	return (
    <div className="content">
	  <p>{props.name}</p>
	  <p>{props.discription}</p>
	  <p>{props.location}</p>
	</div>
 );
};


export default CommunityTemplate;
