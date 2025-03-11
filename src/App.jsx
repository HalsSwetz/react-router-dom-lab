import { useState } from 'react';
import { Route, Routes } from 'react-router';
import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';



const App = () => {

const [mailboxes, setMailboxes] = useState([]);

const addBox = (newMailboxData) => {
  newMailboxData._id = mailboxes.length + 1;
  setMailboxes([...mailboxes, newMailboxData]);
};


  return (
    <>
    <NavBar />
    <h1>Post Office</h1>

    <Routes>
      <Route path="/" element={<h2>Welcome to the Post Office</h2>} />
      <Route path="/mailboxes" element={ <MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
      <Route 
        path="/mailboxes/:mailboxId"
        element={<MailboxDetails mailboxes={mailboxes} />}
      />
      <Route path="*" element={<h2>Whoops, nothing to see here!</h2>} />
    </Routes>

    </>
  ); 
};

export default App;
