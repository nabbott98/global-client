import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { itemShow, itemUpdate, itemDelete } from "../../api/item"
import { cartAdd } from "../../api/cart"
import ItemUpdate from "./ItemUpdate"

const ItemShow = ({ user, msgAlert}) => {

    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState({})

    const { id } = useParams()
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    // const [isDeleteShown, setIsDeleteShown] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        itemShow(user, id)
        .then(res => {
            setItem(res.data.item)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Item Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const handleAddToCart = () => {
        cartAdd(quantity, user, item._id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Added item to Cart',
                variant: 'success'
            })
        })
        .then(() => {
            navigate('/items')
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Add to Cart Failure' + error,
                variant: 'danger'
            })
        })
    }

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current item
        // then comma and modify the key to the value you need
        setItem({...item, [event.target.name]: event.target.value})
    }

    const handleUpdateItem = () => {
        itemUpdate(item, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Update Item',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Item Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteItem = () => {
        itemDelete(user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Delete Item Success',
                variant: 'success'
            })
            navigate('/items')
        })
        // .then(() => {
        //     navigate('/items')
        // })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Item Failure' + error,
                variant: 'danger'
            })
        })
    }

    return(
        <>
            <h3>{item.name}     ${item.price}</h3>
            <img src={item.image} alt={item.name}/>
            <p>{item.category}</p>
            <p>{item.description}</p>


            <input
                type='number'
                value={quantity}
                name='name'
                placeholder='quantity'
                onChange={handleChange}
            />

            <button onClick={handleAddToCart}>Add To Cart</button>
            <button onClick={toggleShowUpdate}>Update</button>
            {isUpdateShown && (
                <ItemUpdate item={item}
                    handleChange={handleChange}
                    handleUpdateItem={handleUpdateItem}
                />
            )}
            <button onClick={handleDeleteItem}>Delete</button>
        </>
    )
}

export default ItemShow