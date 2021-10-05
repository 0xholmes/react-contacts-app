import ContactCard from "./ContactCard"

const ContactList = ({ contacts }) => {
  const renderContacts = contacts.map(contact => (
    <ContactCard contact={contact}></ContactCard>
  ))

  return <div className="ui celled list">{renderContacts}</div>
}

export default ContactList
