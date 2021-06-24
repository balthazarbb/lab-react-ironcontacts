// in src/components folder

import React from 'react';

function ContactDetails(props) {
  return (
    <tr>
      <td>
        <img
          className="img-fluid img-thumbnail celebImg"
          src={props.eachContact.pictureUrl}
          alt="celebrity"
        />
      </td>
      <td>{props.eachContact.name}</td>
      <td>{props.eachContact.popularity.toFixed(2)}</td>
      <td>
        <button
          className="btn btn-secondary"
          onClick={() => props.deleteContact(props.eachContact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactDetails;