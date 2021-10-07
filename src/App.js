import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { uuid } from "uuidv4"
import "./App.css"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const addContacts = contact => {
    setContacts([...contacts, { ...contact, id: uuid() }])
  }

  const removeContacts = id => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) setContacts(retrieveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add">
            <AddContact addContacts={addContacts} />
          </Route>
          <Route path="/" exact>
            <ContactList contacts={contacts} getContactId={removeContacts} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
