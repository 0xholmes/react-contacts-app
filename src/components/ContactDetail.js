import React from "react"
import user from "../images/user_detail.png"
import { Link, useLocation } from "react-router-dom"

const ContactDetail = () => {
  const location = useLocation()
  const { firstName, lastName, email } = location.state.contact

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">
            {firstName} {lastName}
          </div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="ui card centered">
        <Link to="/" className="ui card centered">
          <button className="ui button blue center">Back</button>
        </Link>
      </div>
    </div>
  )
}

export default ContactDetail
