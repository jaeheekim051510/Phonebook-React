import React from 'react';


let EachContact = (props) => {
    return (
    <div className="eachContact"> 
        <h2>{props.firstname} {props.lastname}</h2>
        <p>{props.email}</p>
    </div>
    )
}

export default EachContact;