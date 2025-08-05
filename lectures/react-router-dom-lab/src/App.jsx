import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'

function App() {

  const [mailboxes, setMailBoxes] = useState([]);

  const addMail = (newMail) => {
    newMail._id = mailboxes.length + 1;
    setMailBoxes([...mailboxes, newMail]);
  }
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>}/>
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
          <Route path="/new-mailbox" element={<MailboxForm addMail={addMail} />}/>
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}/>
          <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
        </Routes>
    </>
  )
}

export default App
