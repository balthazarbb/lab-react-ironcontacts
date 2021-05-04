import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

class App extends Component {
   state = {
      detailedContacts: contacts.slice(0, 5),
   };

  handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length)
    let elem  = contacts[randomIndex]
    // using the spread operator to grab all elemtents of students one by one and store it in the new array
    // [...this.state.students]
    this.setState({
      detailedContacts: [elem, ...this.state.detailedContacts]
    })
};

  handleSortName = () =>{
    const {detailedContacts} = this.state;
    let clonedContacts = JSON.parse(JSON.stringify(detailedContacts))

    clonedContacts.sort((a, b)=>{
      if (a.name > b.name){
        return 1
      } else if (a.name < b.name){
        return -1
      }else{
        return 0;
      }
    })
    this.setState({
      detailedContacts: clonedContacts
    })
  }



  render() {
      const { detailedContacts } = this.state;
      return (
         <ul>
            <button onClick={this.handleAdd}>Add Random</button>
            <button onClick={this.handleSortName}>Sort Alpabetically</button>
            <button onClick={this.handleSortPop}>Sort Popularity</button>

           {detailedContacts.map((contactInfo) => {
               return (
                  <div>
                     <div>
                        <img style={{ width: "70px" }}src={contactInfo.pictureUrl}></img>
                     </div>
                     <div>{contactInfo.name} </div>
                     <div>{contactInfo.popularity} </div>
                     <button onClick={() => {this.handleDelete(contactInfo.id)}}>Delete</button>
                  </div>
               );
            })}
         </ul>
      );
   }
}

export default App;




/*
Starte all over again but left the first try

import './App.css';
import Contacts from './contacts.json'
import ContactList from './components/ContactList';


function App() {
  return (
    <div>

    <div>hellosen</div>
      <ContactList />
    </div>

  );
}

export default App; 
*/