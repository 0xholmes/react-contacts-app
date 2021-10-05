import React, { useState } from "react"

const AddContact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const add = e => {
    e.preventDefault()

    if (firstName === "" || lastName === "" || email === "") {
      alert("All the fields are mandatory")
    }

    console.log(firstName, lastName, email)
  }

  return (
    <div className="ui main">
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
