import React from "react"

const AddContact = () => {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>

        <div className="field">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        <button className="ui button blue">Add</button>
      </form>
    </div>
  )
}

export default AddContact
