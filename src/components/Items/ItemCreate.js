import React, { useState } from 'react' 
import { itemCreate } from '../../api/item'
import { useNavigate } from 'react-router-dom'

import ItemForm from '../shared/ItemForm'

const ItemCreate = ({ user, msgAlert }) => {
    const navigate = useNavigate()

    const defaultItem = {
        name: '',
        category: '',
        price: '',
        description: ''
    }

    const [item, setItem] = useState(defaultItem)

    const handleChange = (e) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        // this was fine for the old way of building a pet
        // need new stuff to handle new data types number and boolean
        // setPet({...pet, [event.target.name]: event.target.value})
        setItem(prevItem => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            // this handles our number type
            if (e.target.type === 'number') {
                // this looks at the input type and changes from the default type of string to an actual number
                updatedValue = parseInt(e.target.value)
            }

            const updatedItem = { [updatedName]: updatedValue }

            return { ...prevItem, ...updatedItem }
        })
    }

    const handleCreateItem = (e) => {
        e.preventDefault()
        
        itemCreate(item, user)
            .then(res => { navigate(`/items/${res.data.item.id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Create Item',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Item Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <ItemForm
            item={ item }
            handleChange={ handleChange }
            heading="Create a new item listing!"
            handleSubmit={ handleCreateItem }
        />
	)
}

export default ItemCreate