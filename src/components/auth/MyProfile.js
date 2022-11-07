import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import { userUpdate } from '../../api/auth'

import UserModalForm from './UserModalForm'
import { Modal } from 'react-bootstrap'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import './auth.css'

const MyProfile = ({user,msgAlert, setUser}) => {
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const navigate = useNavigate()
    // first name update
    const [userName, setUserName] = useState(user)
    
    //toggle show, for now, later may be modals
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }
    const triggerRefresh= () => {setUpdated(prev => !prev)}

    const handleClose=() => {setEditModalShow(false)}

    const handleChange = (event) => {
        setUserName(prevUser => {
            const updatedName = event.target.name
            let updatedValue = event.target.value

            const updatedUser = { [updatedName]: updatedValue }

            return { ...prevUser, ...updatedUser }
        })
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        
        userUpdate(userName)
            .then((res) => {
                console.log('this is user in update user', res.data.user)
                setUser(res.data.user)
            })
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.updatePetSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: messages.updatePetFailure + error,
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
                <h3 class="user-menu"><span class="span">First Name:</span> {user.firstName}</h3>
                <h3 class="user-menu"><span class="span">Last Name:</span> {user.lastName}</h3>
                <h3 class="user-menu"><span class="span">Email:</span> {user.email}</h3>
                <div className="btn-group-vertical"  id="profile-buttons">

                    {editModalShow &&<UserModalForm closeModal={setEditModalShow}
                    show = {editModalShow}
                    userName={userName}
        
                    handleUpdate={handleUpdate}
                    handleChange={handleChange}
        
                    navigate ={navigate}
                    />}
                    
                    <Button onClick={()=> 
                    {
                        setEditModalShow(true)
                    }}>Update info</Button>
                    <Button onClick={()=> {navigate('/change-password')}} className='btn btn-info btn-sm' variant='info' class="user-menu">
                            Change Password
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile