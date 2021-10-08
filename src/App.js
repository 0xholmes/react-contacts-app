import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { uuid } from "uuidv4"
import api from "./api/contacts"
import "./App.css"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import ContactDetail from "./components/ContactDetail"

const App = () => {
  // const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const retrieveContacts = async () => {
    const res = await api.get("/contacts")
    return res.data
  }

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
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrieveContacts) setContacts(retrieveContacts)

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    }

    getAllContacts()
  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
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
          <Route path="/contact/:id">
            <ContactDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
