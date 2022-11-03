import React from 'react'
import { signUp } from '../../api/auth'

const UpdateEmail =({user,handleChange,handleUpdate}) => {
    return(
        <>
            <input
                type='text'
                value={user.email}
                name='firstName'
                onChange={handleChange}
            />
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default UpdateEmail