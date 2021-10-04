import "./App.css"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

const App = () => {
  const contacts = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@volcadot.eth",
    },
    {
      id: 2,
      firstName: "Jack",
      lastName: "Dorsey",
      email: "jack@volcadot.eth",
    },
  ]

  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
