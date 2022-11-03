import React from 'react'
import { signUp } from '../../api/auth'

const UpdateLastName =({user,handleChange,handleUpdate}) => {
    return(
        <>
            <input
                type='text'
                value={user.lastName}
                name='firstName'
                onChange={handleChange}
            />
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default UpdateLastName