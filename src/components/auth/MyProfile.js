import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../api/auth'
// import auth from '../../api/auth'
import { changePassword } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import ChangePassword from './ChangePassword'
import { userUpdate } from '../../api/auth'

import UpdateName from './UpdateName'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import './auth.css'

const MyProfile = ({user,props, msgAlert,data}) => {
    const [firstName, setFirstName] = useState('')
    const [isUpdateShown, setIsUpdateShown] = useState(false)


    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }


    const handleChange = (event) => {
        setFirstName(event.target.value)
    }
    const handleUpdate = () => {
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
    const navigate = useNavigate()


    return (
        <div id='main-page-body-my-profile'>
            <h3 id="main-text-profile">My profile info</h3>
            <div id="wrap-div">
                <h3 class="user-menu">First Name: {user.firstName}</h3>
                <h3 class="user-menu">Last Name: {user.lastName}</h3>
                {/* <Button className='col-md-1 mx-auto' variant='primary' type='submit'>edit</Button> */}
                <h3 class="user-menu">Email: {user.email}</h3>
                <div className="btn-group-vertical"  id="profile-buttons">
                    <Button onClick={toggleShowUpdate} className='btn btn-info btn-sm mb-2' type='submit'>Edit my info</Button>
                    {isUpdateShown && (<UpdateName user={user.firstName}
                    handleChange ={handleChange}
                    handleUpdate ={handleUpdate}/>)}
                    <Button onClick={()=> {navigate('/change-password')}} className='btn btn-info btn-sm' variant='info' class="user-menu">
                            Change Password
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile