import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { uuid } from "uuidv4"
import api from "./api/contacts"
import "./App.css"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import EditContact from "./components/EditContact"
import ContactList from "./components/ContactList"
import ContactDetail from "./components/ContactDetail"

const App = () => {
  // const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const retrieveContacts = async () => {
    const res = await api.get("/contacts")
    return res.data
  }

  const addContacts = async contact => {
    const request = {
      id: uuid(),
      ...contact,
    }

    const res = await api.post("/contacts", request)
    setContacts([...contacts, res.data])
  }

  const updateContacts = async contact => {
    const res = await api.put(`/contacts/${contact.id}`, contact)

    const { id } = res.data
    setContacts(
      contacts.map(contact => {
        return contact.id === id ? res.data : contact
      })
    )
  }

  const removeContacts = async id => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter(contact => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  const searchHandler = searchTerm => {
    setSearchTerm(searchTerm)

    if (searchTerm !== "") {
      const newContactList = contacts.filter(contact => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)
    } else {
      setSearchResults(contacts)
    }
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

          <Route path="/edit">
            <EditContact updateContacts={updateContacts} />
          </Route>

          <Route path="/" exact>
            <ContactList
              contacts={searchTerm.length < 1 ? contacts : searchResults}
              getContactId={removeContacts}
              searchTerm={searchTerm}
              searchKeyword={searchHandler}
            />
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
