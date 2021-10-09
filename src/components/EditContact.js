import React, { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"

const EditContact = ({ updateContacts }) => {
  let history = useHistory()

  const location = useLocation()
  const { firstName, lastName, email, id } = location.state.contact

  const state = {
    firstName,
    lastName,
    email,
    id,
  }

  const [fName, setFName] = useState(firstName)
  const [lName, setLName] = useState(lastName)
  const [em, setEm] = useState(email)

  state.firstName = fName
  state.lastName = lName
  state.email = em

  const update = e => {
    e.preventDefault()

    if (fName === "" || lName === "" || em === "") {
      alert("All the fields are mandatory")
      return
    }

    updateContacts(state)
    setFName("")
    setLName("")
    setEm("")

    history.push("/")
  }

  return (
    <div className="ui main" style={{ margin: "5em" }}>
      <h2>Edit Contact</h2>

      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={e => setFName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={e => setLName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={em}
            onChange={e => setEm(e.target.value)}
          />
        </div>

        <button className="ui button blue">Update</button>
      </form>
    </div>
  )
}

export default EditContact
