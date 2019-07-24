import React from 'react';
import './App.css';
import PageForm from "./Form"
import { useState } from 'react'



function App() {

  const [userList, setUserList] = useState([])

  const [memberToEdit, setMemberToEdit] = useState([])

  function Edit(member) {
    setMemberToEdit([...memberToEdit, member])
    console.log(`memberToEdit sent: ${memberToEdit.name}`)
  }

  return (
    <div className="App">

      <PageForm setUserList={setUserList} userList={userList} memberToEdit={memberToEdit} />

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
