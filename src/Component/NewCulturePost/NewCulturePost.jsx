import React from 'react';
import './NewCulturePost.css';

const NewCulturePost = (props) => {
  return (

   <div className="form-container">
   <fieldset>
      <legend>Create New Culture:</legend>
      <legend>Symbol:<br/></legend>
     	<input type="text"	onChange={props.updateCultureSymbol}  value={props.symbol} placeholder='Symbol' id="input"/>
      <legend>Value:<br/></legend>
      <input type="text" onChange={props.updateCultureValue}   value={props.value}  placeholder='Value' id="input"/>
      <legend>Custom:<br/></legend>
      <input type="text"	onChange={props.updateCultureCustom}  value={props.custom} placeholder='Custom' id="input"/>
      <legend>Tradition:<br/></legend>
      <input type="text"	onChange={props.updateCultureTradition}  value={props.tradition} placeholder='Tradition' id="input"/>
      <legend>Language<br/></legend>
      <input type="text" onChange={props.updateCultureLanguage}  value={props.language} placeholder='Language' id="input"/>
      <br/><br/>
      <input  type="submit" onClick={props.createCulturePost} value="Create New Culture"  id="submit"/>
   </fieldset>
   </div>
  );
};

export default NewCulturePost;
