import React, { useEffect, useState } from 'react' 
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { itemIndex } from '../../api/item'

// const cardContainerLayout = {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'center'
// }

const ItemsIndex = ({ user, msgAlert }) => {

    const [allItems, setAllItems] = useState([])
	console.log(allItems)
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


    const items = allItems.map(items => (
        <Card key={ items.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ items.name }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={ `/items/${items.id}` }>View { items.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    // if (!allPets) {
    //     return <LoadingScreen />
    // }

    return (
        <div className='container-md'>
            { items }
        </div>
    )
}

export default ItemsIndex