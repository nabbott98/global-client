import React from 'react'
import { signUp } from '../../api/auth'

const UpdateEmail =({user,handleEmailChange,handleEmailUpdate}) => {
    return(
        <>
            <input
                type='text'
                value={user.email}
                name='firstName'
                onChange={handleEmailChange}
            />
            {/* <button onClick={handleEmailUpdate}>Update</button> */}
        </>
    )
}

export default UpdateEmail