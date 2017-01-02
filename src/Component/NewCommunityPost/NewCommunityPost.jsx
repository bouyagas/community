import React from 'react';
import './NewCommunityPost.css'

const NewCommunityPost = (props) => {
return (
  <div className="form-container">
    <fieldset id="fieldset">
        <legend>Create New Community</legend>
        <legend>Name:<br/></legend>
	  	<input type="text" onChange={props.updateCommunityName} value={props.name} placeholder='Name' id="input"/>
	  	<legend>Discription:<br/></legend>
	  	<input type="text" onChange={props.updateCommunityDiscription} value={props.discription} placeholder="Discription" id="input"/>
	  	<legend>Location:<br/></legend>
	  	<input type="text" onChange={props.updateCommunityLocation} value={props.location} placeholder="Location" id="input"/>
	  	<br/><br/>
	    <input type="submit" onClick={props.createCommunityPost} value="Create New Community" id="submit"/>
    </fieldset>
  </div>
 );
};

export default NewCommunityPost;


