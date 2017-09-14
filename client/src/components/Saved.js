import React from "react";

const Saved = props =>
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a><br/>
  //   <button onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
  // </div>
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-default ">View Article</button>
          </a>
          <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>

export default Saved;
