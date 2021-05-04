import React from 'react'
import contacts from "../contacts.json";


class ContactList extends React.Component{
    state = {
        detailedContacts: contacts.slice(0, 5)
    }
    
        render(){
        const {contacts} = this.state
        return(
            <div>
                {
                contacts.map((detailedContacts, index)=>{
                return <contacts
                        key={index}
                        contact={detailedContacts}
                        />
                })
                }
            </div>
        )
    }
}



export default ContactList

