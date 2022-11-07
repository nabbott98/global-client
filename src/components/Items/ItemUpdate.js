import react from "react"

const ItemUpdate = ({ item, handleChange, handleUpdateItem}) => {
    return (
        <>
            <input
                type='text'
                value={item.name}
                name='name'
                onChange={handleChange}
            />
            <input
                type='text'
                value={item.category}
                name='category'
                onChange={handleChange}
            />
            <input
                type='number'
                value={item.price}
                name='price'
                onChange={handleChange}
            />
            <input
                type='text'
                value={item.description}
                name='description'
                onChange={handleChange}
            />
            <input
                type='text'
                value={item.image}
                name='image'
                onChange={handleChange}
            />
            <button onClick={handleUpdateItem}>Update Item</button>
        </>
    )
}

export default ItemUpdate