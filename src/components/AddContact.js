import React, { useState } from "react"
import { useHistory } from "react-router-dom"

const AddContact = ({ addContacts }) => {
  let history = useHistory()

  const state = {
    firstName: "",
    lastName: "",
    email: "",
  }

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  state.firstName = firstName
  state.lastName = lastName
  state.email = email

  const add = e => {
    e.preventDefault()

    if (firstName === "" || lastName === "" || email === "") {
      alert("All the fields are mandatory")
      return
    }

    addContacts(state)
    setFirstName("")
    setLastName("")
    setEmail("")

    history.push("/")
  }

  return (
    <div className="ui main" style={{ margin: "5em" }}>
      <h2>Add Contact</h2>

      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button className="ui button blue">Add</button>
      </form>
    </div>
  )
}

export default AddContact
