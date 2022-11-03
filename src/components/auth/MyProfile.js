import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../api/auth'
// import auth from '../../api/auth'
import { changePassword } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import ChangePassword from './ChangePassword'
import { userUpdate } from '../../api/auth'

import UpdateFirstName from './UpdateFirstName'
import UpdateLastName from './UpdateLastName'
import UpdateEmail from './UpdateEmail'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import './auth.css'

const MyProfile = ({user,props, msgAlert}) => {
    const navigate = useNavigate()
    // first name update
    const [firstName, setFirstName] = useState('')
    //second name update
    const [lastName, setLastName] = useState('')
    //email update
    const [email, setEmail] = useState('')
    //toggle show, for now, later may be modals
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    // handle FIRST name change function------------------------------------------------
    const handleFirstChange = (event) => {
        setFirstName(event.target.value)
    }
    // handle first name update function
    const handleFirstUpdate = () => {
        let updatedUser= user
        updatedUser.firstName = firstName
        userUpdate(updatedUser)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'update',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'update Failure' + error,
                variant: 'danger'
            })
        })
    }
    //---------------------------------------------------------------------------------------

    // handle LAST name change function------------------------------------------------------
    const handleLastChange = (event) => {
        setLastName(event.target.value)
    }
    // handle last name update function
    const handleLastUpdate = () => {
        let updatedUser= user
        updatedUser.lastName = lastName
        userUpdate(updatedUser)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'update',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'update Failure' + error,
                variant: 'danger'
            })
        })
    }
    //---------------------------------------------------------------------------------------

    // handle EMAIL name change function------------------------------------------------------
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    // handle last name update function
    const handleEmailUpdate = () => {
        let updatedUser= user
        updatedUser.email = email
        userUpdate(updatedUser)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'update',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'update Failure' + error,
                variant: 'danger'
            })
        })
    }
    //---------------------------------------------------------------------------------------


    return (
        <div id='main-page-body-my-profile'>
            <h3 id="main-text-profile">My profile info</h3>
            <div id="wrap-div">
                <h3 class="user-menu">First Name: {user.firstName}</h3>
                <h3 class="user-menu">Last Name: {user.lastName}</h3>
                <h3 class="user-menu">Email: {user.email}</h3>
                <div className="btn-group-vertical"  id="profile-buttons">

                    <Button onClick={toggleShowUpdate} className='btn btn-info btn-sm mb-2' type='submit'>Change First Name</Button>
                    {isUpdateShown && (<UpdateFirstName user={user.firstName}
                    handleChange ={handleFirstChange}
                    handleUpdate ={handleFirstUpdate}/>)}

                    <Button onClick={toggleShowUpdate} className='btn btn-info btn-sm mb-2' type='submit'>Change Last Name</Button>
                    {isUpdateShown && (<UpdateLastName user={user.lastName}
                    handleChange ={handleLastChange}
                    handleUpdate ={handleLastUpdate}/>)}

                    <Button onClick={toggleShowUpdate} className='btn btn-info btn-sm mb-2' type='submit'>Change Email</Button>
                    {isUpdateShown && (<UpdateEmail user={user.email}
                    handleChange ={handleEmailChange}
                    handleUpdate ={handleEmailUpdate}/>)}

                    <Button onClick={()=> {navigate('/change-password')}} className='btn btn-info btn-sm' variant='info' class="user-menu">
                            Change Password
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile