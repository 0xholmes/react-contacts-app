import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

const App = () => {
  const [contacts, setContacts] = useState([])

  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
