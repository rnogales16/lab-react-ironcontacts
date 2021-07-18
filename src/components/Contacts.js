import React, {useState} from 'react'
import allContacts from "../contacts.json";
import OneContact from './OneContact'


const fiveContacts = allContacts.splice(0, 5);//.splice() crea un nuevo array quitando la info del array principal

function Contacts(){

  const [contacts, setContacts] = useState(fiveContacts)

  function removeContact(contactId) {
    const updatedContactArray = contacts.filter(contact => contact.id !== contactId)
    setContacts(updatedContactArray)
  }

  function addRandomContact() {
    const randomContact = allContacts[(Math.floor(Math.random() * (allContacts.length-1)))]
    const newArr = [...contacts, randomContact]
    setContacts(newArr)
  }

  function sortByName() {
    let contactsCopy = [...contacts];
    contactsCopy.sort((a, b) => {
      if(a.name < b.name) {
        return -1
      }else {
        return 1
      }
    })
    setContacts(contactsCopy)
  }

  function sortByPopularity() {
    let contactsCopy = [...contacts];
    contactsCopy.sort((a, b) => {
      if(a.popularity < b.popularity) {
        return 1
      }else {
        return -1
      }
    })
    setContacts(contactsCopy)
  }

  return (
    <div>
      <button onClick = {()=>addRandomContact()}>Add Random Contact</button>
      <button onClick = {()=>sortByName()}>Sort By Name</button>
      <button onClick = {()=>sortByPopularity()}>Sort By Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>
          {contacts.map((contact, idx) => {
            return(
              <OneContact key={idx} contact={contact} handleDelete= {removeContact}/>
            )
          })}
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Contacts;