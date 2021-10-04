import React from "react"

const ContactCard = ({ contacts }) => {
  return (
    <div key={contact.id} className="item">
      <div className="content">
        <div className="header">
          {contact.firstName} {contact.lastName}
        </div>
        <div>{contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  )
}

export default ContactCard
