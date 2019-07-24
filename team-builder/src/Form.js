import React from 'react'
import { useState, useEffect } from 'react'



function PageForm(props) {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     role: ''
    // });


    let memberToEdit = props.memberToEdit;

    useEffect(() => {
        props.setFormData({
            name: memberToEdit.name,
            email: memberToEdit.email,
            role: memberToEdit.role
        })
        console.log(props.formData)
    }, [memberToEdit])



    const submitHandler = (event) => {
        event.preventDefault()
        props.setUserList([...props.userList, props.formData])
        console.log(`person added to list: ${props.userList}`)
        props.setFormData({
            name: '',
            email: '',
            role: ''
        })
    }

    const changeHandler = event => {
        props.setFormData({
            ...props.formData,
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
                    value={props.formData.name}
                />
                <input
                    name='email'
                    type='text'
                    placeholder='Enter Your Email'
                    onChange={changeHandler}
                    value={props.formData.email}
                />
                <input
                    name='role'
                    type='text'
                    placeholder='Enter Your Role'
                    onChange={changeHandler}
                    value={props.formData.role}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PageForm;