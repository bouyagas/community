import React from 'react';
import CommunityTemplate from './CommunityTemplate/CommunityTemplate.jsx';
import './CommunityContainer.css'


const CommunityContainer = (props) => {
  const communities =  props.community.map((group, i) => {
     return (
      <CommunityTemplate
       name={group.name}
       discription={group.discription}
       location={group.location}
       key={i}
      />
     );
  });
   return (
   	 <div>
   	 	{communities}
   	 </div>
   	);
};



export default CommunityContainer;
