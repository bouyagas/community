import React from 'react';
import './CultureTemplate.css'

const CultureTemplate = (props) => {
	return (
       <div className="content">
       	<p>{props.symbol}</p>
       	<p>{props.value}</p>
       	<p>{props.custom}</p>
       	<p>{props.tradition}</p>
       	<p>{props.language}</p>
       </div>
	);
};


export default CultureTemplate;
