import React from 'react'
import { useState, useEffect } from 'react'



function PageForm(props) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });


    let memberToEdit = props.memberToEdit;
    
    useEffect(() => {
        setFormData({
            name: memberToEdit.name,
            email: memberToEdit.email,
            role: memberToEdit.role
        })
        console.log(`formData updated: ${formData}`)
    },[memberToEdit])



    const submitHandler = event => {
        event.preventDefault()
        console.log(`formData submitted: ${formData}`)
        
    }

    const addPerson = () => {
        props.setUserList([...props.userList, formData])
        console.log(`person added to list: ${props.userList}`)
    }


    const changeHandler = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    };


    return (
        <div>
            <form onSubmit={submitHandler}>
                
                <input
                        name='name'
                        type='text'
                        placeholder='Enter Your Name'
                        onChange={changeHandler}
                        value={formData.name}
                    />
                
                <input
                        name='email'
                        type='text'
                        placeholder='Enter Your Email'
                        onChange={changeHandler}
                        value={formData.email}
                    />
                
                <input
                        name='role'
                        type='text'
                        placeholder='Enter Your Role'
                        onChange={changeHandler}
                        value={formData.role}
                    />
                
                <button onClick={addPerson}>Submit</button>
            </form>


            {/* <h1>{formData.name}</h1>
            <p>{formData.email}</p>
            <p>{formData.role}</p> */}

        </div>
    )
}

export default PageForm;