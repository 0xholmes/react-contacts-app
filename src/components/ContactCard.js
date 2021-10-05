import user from "../images/user.png"

const ContactCard = ({ contact }) => {
  const { id, firstName, lastName, email } = contact

  return (
    <div className="item">
      <img className="ui avatar image" src={user} />
      <div className="content">
        <div className="header">
          {firstName} {lastName}
        </div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  )
}

export default ContactCard
