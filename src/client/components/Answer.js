import React, { Component } from 'react'

function Answer (props) {
    return (
      <div  style={{display: "flex", flexDirection: "column", border: "solid 1px blue"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <p>{props.date}</p>
          <p>|</p>
          <p>{props.author}</p>
        </div>
        <p>{props.text}</p> 
      </div>
    );
}

export default Answer