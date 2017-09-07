import React from "react";

const Results = props =>
  <div>
    <h4>{props.title}</h4>
    <p>Publish Date & Time: {props.date}</p>
    <a href={props.url} target="_blank">Link To Article</a>
    <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  </div>

export default Results;
