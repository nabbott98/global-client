import React, { useEffect, useState } from 'react' 
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { itemIndex } from '../../api/item'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const ItemIndex = ({ user, msgAlert }) => {

    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        itemIndex(user)
        .then(res => {
            setAllItems(res.data.items)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Items Failure' + error,
                variant: 'danger'
            })
        })
    }, [])


    const itemCards = allItems.map(item => (
        <Card key={ item.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>
                <Link to={ `/items/${item._id}` }>{ item.name }</Link>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    ${item.price}
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div className='container-md' style={ cardContainerLayout }>
            {/* <ul>{allItemsJSX}</ul> */}
            { itemCards }
        </div>
    )
}

export default ItemIndex