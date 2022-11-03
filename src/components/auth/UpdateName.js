import React from 'react'
import { signUp } from '../../api/auth'

const UpdateName =({user,handleChange,handleUpdate}) => {
    return(
        <>
            <input
                type='text'
                value={user.firstName}
                name='brand'
                onChange={handleChange}
            />
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default UpdateName