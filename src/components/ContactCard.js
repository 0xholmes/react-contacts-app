import user from "../images/user.png"
import { Link } from "react-router-dom"

const ContactCard = ({ contact, deleteContacts }) => {
  const { firstName, lastName, email, id } = contact

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`, state: { contact: contact } }}>
          <div className="header">
            {firstName} {lastName}
          </div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => deleteContacts(id)}
      ></i>
    </div>
  )
}

export default ContactCard
