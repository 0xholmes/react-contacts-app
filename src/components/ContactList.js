import ContactCard from "./ContactCard"
import { Link } from "react-router-dom"

const ContactList = ({ contacts, getContactId }) => {
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

  return (
    <div style={{ margin: "5em" }}>
      <h2 style={{ display: "flex", justifyContent: "space-between" }}>
        Contact List
        <Link to="/add">
          <div className="ui button blue right">Add Contact</div>
        </Link>
      </h2>
      <div className="ui celled list">{renderContacts}</div>
    </div>
  )
}

export default ContactList
