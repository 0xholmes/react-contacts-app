import { useRef } from "react"
import ContactCard from "./ContactCard"
import { Link } from "react-router-dom"

const ContactList = props => {
  const { contacts, getContactId, searchTerm, searchKeyword } = props

  const inputEl = useRef("")

  const clickHandler = id => {
    getContactId(id)
  }

  const renderContacts = contacts.map(contact => (
    <ContactCard
      contact={contact}
      clickHandler={clickHandler}
      key={contact.id}
    />
  ))

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value)
  }

  return (
    <div style={{ margin: "5em" }}>
      <h2 style={{ display: "flex", justifyContent: "space-between" }}>
        Contact List
        <Link to="/add">
          <div className="ui button blue right">Add Contact</div>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input" style={{ width: "90vw" }}>
          <input
            ref={inputEl}
            type="text"
            placeholder="Search contacts"
            className="prompt"
            value={searchTerm}
            onChange={getSearchTerm}
            style={{ width: "100%" }}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContacts.length > 0 ? renderContacts : "No contacts"}
      </div>
    </div>
  )
}

export default ContactList
