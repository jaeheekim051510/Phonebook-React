import React from 'react';
import EachContact from './EachContact'
import data from './data';
// import Form from './Form';

class Collection extends React.Component {
    componentWillMount() {
        this.setState({
            contacts: data,
        });
    }

    addContact = (e) => {
        e.preventDefault();
        const contacts = this.state.contacts;
        const newId = contacts[contacts.length - 1].id + 1;    
        this.setState({
            contacts: contacts.concat({
                id: newId, 
                firstname: this.refs.firstname.value,
                lastname: this.refs.lastname.value,
                email: this.refs.email.value}),
        });

        this.refs.firstname.Value = "null";
        this.refs.lastname.value = "null";
        this.refs.email.value = "null";
    };

    newContact = () => 
        <div className="form-container">
        <form className="form" onSubmit={this.addContact}>
        <fieldset>
            <legend> New Contact </legend>
            <input ref="email" type="email" placeholder="example.com" />
            <input ref="firstname" type="text" placeholder="firstname" />
            <input ref="lastname" type="text" placeholder="lastname" />
            <button type="submit" className="submit-button">Add</button>
        </fieldset>
        </form>
        </div>;

    render () {
    return (
        <div id="Collection">
            {this.newContact()}
        <div className="contact">
        {this.state.contacts.map(info => 
        <EachContact key={info.id} {...info}/>
        )}
        </div>
        </div>
    );
}
}

export default Collection;