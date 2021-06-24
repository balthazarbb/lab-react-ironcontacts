// in src/components folder

import React, { Component } from 'react';
import '../App.css';
import ContactDetails from './ContactDetails';

import contactsFromJSON from '../contacts.json';
// you can name it whatever you want when you import it
// the important part is the relative path
// this is only true for json files because they do not have a default exported value

class ContactList extends Component {
  // Iteration 1 | Show first 5 contacts
  // class components have state available natively
  state = {
    visibleContacts: contactsFromJSON.slice(0, 5),
  };

  // Iteration 2 | Add New Random Contacts
  // Create a Add Random Contact button so that every time you click on this button, it adds a new random actor.
  addRandomContact = () => {
    let randomIndex = Math.floor(contactsFromJSON.length * Math.random()); // random number between 0 and contactsFromJSON.length (excluded)
    let randomContact = contactsFromJSON[randomIndex];

    // Method 1
    // Create a copy of this.state.visibleContacts
    let newList = [...this.state.visibleContacts];
    // push or unshift in the copy you just created
    newList.unshift(randomContact);
    // save it in the state
    this.setState({
      visibleContacts: newList,
    });

    // Method 2 reduced syntax with spread operator
    // this.setState({
    //   visibleContacts: [...this.state.visibleContacts, randomContact]
    // })
  };

  // Iteration 3 | Sort Contacts By Name And Popularity
  sortContacts = (field) => {
    // copy of state as not to mutate original
    const sortedContacts = [...this.state.visibleContacts];
    // different sort based on field parameter (reduced syntax for both)
    if (field === 'name')
      sortedContacts.sort((a, b) => (b.name > a.name ? -1 : 1));
    // sort for strings
    else if (field === 'popularity')
      sortedContacts.sort((a, b) => b.popularity - a.popularity); // sort for numbers

    // setting the state with the sorted array
    this.setState({
      visibleContacts: sortedContacts,
    });
  };

  // Iteration 4 | Remove Contacts
  deleteContact = (id) => {
    // copy of state as not to mutate original
    const contactsArr = [...this.state.visibleContacts];

    // using filter to remove item of given id
    const newContactsArr = contactsArr.filter(
      (contactObj) => contactObj.id !== id
    );

    // setting the state with the new array and removed contact
    this.setState({ visibleContacts: newContactsArr });
  };

  render() {
    return (
      <div className="container-fluid">
        <h1>
          IronContacts{' '}
          <span role="img" aria-label="heart">
            {' '}
            ❤️{' '}
          </span>
        </h1>
        <button
          className="btn btn-secondary"
          onClick={() => this.addRandomContact()}
        >
          Add random
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.sortContacts('popularity')}
        >
          Sort by popularity
        </button>
        <button
          className="btn btn-success"
          onClick={() => this.sortContacts('name')}
        >
          Sort by name
        </button>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* returning a component for each element in the array using .map */}
            {this.state.visibleContacts.map((eachContact, index) => {
              return (
                <ContactDetails
                  eachContact={eachContact}
                  index={index}
                  deleteContact={this.deleteContact}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;