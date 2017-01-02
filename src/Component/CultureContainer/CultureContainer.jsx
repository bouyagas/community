import React from 'react';
import CultureTemplate from './CultureTemplate/CultureTemplate.jsx'
import './CultureContainer.css';


const CultureContainer = (props) => {
 const cultures = props.culture.map((group, i) => {
 	return (
 	  <CultureTemplate
       symbol={group.symbol}
       value={group.value}
       custom={group.custom}
       tradition={group.tradition}
       language={group.language}
       key={i}
 	  />
 	  );
 	});
    return (
      <div>
      	{cultures}
      </div>
    );

};


export default CultureContainer;
