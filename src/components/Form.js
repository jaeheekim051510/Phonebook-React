import React from 'react';

let Form = (prop) => {
    return (
    <div className="form-container">
    <form className="form" onSubmit={prop}>
    <fieldset>
        <legend> New Contact </legend>
        <input ref="email" type="email" placeholder="example.com" />
        <input ref="firstname" type="text" placeholder="firstname" />
        <input ref="lastname" type="text" placeholder="lastname" />
        <button type="submit" className="submit-button">Add</button>
    </fieldset>
    </form>
    </div>
    )}

export default Form;