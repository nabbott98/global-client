// import ProductDisplay from './Stripe/CheckoutForm'
// import Message from './Stripe/CheckoutForm'
// import CheckoutForm from '../../PaymentForm'

// import React, { useEffect, useState } from 'react' 
// import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { cartIndex } from '../../api/cart'

// const cardContainerLayout = {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'center'
// }

// const CartIndex = ({ user, msgAlert }) => {

//     const [allCarts, setAllCarts] = useState([])

//     useEffect(() => {
//         cartIndex(user)
//         .then(res => {
//             setAllCarts(res.data.cart)
//             console.log(res.data.cart)
//         })
//         .catch((error) => {
//             msgAlert({
//                 heading: 'Failure',
//                 message: 'Index Carts Failure' + error,
//                 variant: 'danger'
//             })
//         })
//     }, [])


//     const cartCards = allCarts.map(cart => (
//         <Card key={ cart.id } style={{ width: '30%', margin: 5 }}>
//             <Card.Header>
//                 <Link to={ `/carts/${cart._id}` }>{ cart.name }</Link>
//             </Card.Header>
//             <Card.Body>
//                 <Card.Text>
//                     ${cart.price}
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     ))

//     return (
//         <>
//         <div className='container-md' style={ cardContainerLayout }>
//             { cartCards }
//         </div>
//         {/* <div className='container-md'>
//             <Checkout />
//         </div> */}
        
//         </>
        
        
//     )
// }

// export default CartIndex