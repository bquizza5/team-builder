import React from 'react';
import './App.css';
import PageForm from "./Form"
import { useState } from 'react'



function App() {

  const [userList, setUserList] = useState([])

  const [memberToEdit, setMemberToEdit] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
});

  function Edit(user) {
    setMemberToEdit(user)
    console.log(`memberToEdit sent: ${memberToEdit}`)
  }

  return (
    <div className="App">

      <PageForm setUserList={setUserList} userList={userList} memberToEdit={memberToEdit} formData={formData} setFormData={setFormData} />

      <div className="top">
        <p>Name</p>
        <p>Email</p>
        <p>Role</p>
        <p>Edit</p>
      </div>

      {
        userList.map(user => {
          return (

            <div className='user'>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.role}</p>
              <button onClick={() => {Edit(user)}}>Edit</button>
            </div>
          )
        })
      }



    </div>
  );
}

export default App;
