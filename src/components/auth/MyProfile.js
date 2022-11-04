import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import { userUpdate } from '../../api/auth'

import UserModalForm from './UserModalForm'
import { Modal } from 'react-bootstrap'

import UpdateFirstName from './UpdateFirstName'
import UpdateLastName from './UpdateLastName'
import UpdateEmail from './UpdateEmail'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import './auth.css'

const MyProfile = ({user,msgAlert}) => {

    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

   
    const navigate = useNavigate()
    // first name update
    const [firstName, setFirstName] = useState('')/// string works lets see object
    //second name update
    const [lastName, setLastName] = useState('')
    //email update
    const [email, setEmail] = useState('')
    //toggle show, for now, later may be modals
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }
    const credentials = {email,firstName,lastName}
    // const [alls,setAlls] = useState(all)

    const triggerRefresh= () => {setUpdated(prev => !prev)}

    // handle FIRST name change function------------------------------------------------
    const handleFirstChange = (event) => {
        event.preventDefault()
        setFirstName(event.target.value)
    }
    // handle LAST name change function------------------------------------------------------
    const handleLastChange = (event) => {
        event.preventDefault()
        setLastName(event.target.value)
    }
    // handle EMAIL name change function------------------------------------------------------
    const handleEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    // handle update function
    const handleUpdate = () => {
        let updatedUser= user
        updatedUser.firstName = firstName //updatedUser.firstName = firstName
        updatedUser.lastName = lastName
        updatedUser.email = email
        userUpdate(updatedUser)
        .then(() => setEditModalShow(false))
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'update',
                variant: 'success'
            })
        })
        .then(() => triggerRefresh())
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'update Failure' + error,
                variant: 'danger'
            })
        })
    }
    //---------------------------------------------------------------------------------------
if(!user){
    return(
        <div>Please Sign In</div>
    )
}
    return (
        <div id='main-page-body-my-profile'>
            <h3 id="main-text-profile">My profile info</h3>
            <div id="wrap-div">
                <h3 class="user-menu">First Name: {user.firstName}</h3>
                <h3 class="user-menu">Last Name: {user.lastName}</h3>
                <h3 class="user-menu">Email: {user.email}</h3>
                <div className="btn-group-vertical"  id="profile-buttons">

                    {editModalShow &&<UserModalForm closeModal={setEditModalShow}
                    show = {editModalShow}
                    user={credentials}
                    firstName ={firstName}
                    lastName={lastName}
                    email={email}
                    handleUpdate={handleUpdate}
                    handleChange ={handleFirstChange}
                    handleLastChange ={handleLastChange}
                    handleEmailChange ={handleEmailChange}
                    />}

                    <Button onClick={()=> 
                    {
                        setEditModalShow(true)

                    }}>edit info</Button>


                    <Button onClick={()=> {navigate('/change-password')}} className='btn btn-info btn-sm' variant='info' class="user-menu">
                            Change Password
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile