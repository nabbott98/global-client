import React from 'react'
import { signUp } from '../../api/auth'

const UpdateFirstName =({user,handleChange,handleUpdate}) => {
    return(
        <>
            <input
                type='text'
                value={user.firstName}
                name='firstName'
                onChange={handleChange}
            />
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default UpdateFirstName