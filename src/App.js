// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'


import ItemShow from './components/Items/ItemShow'
import ItemIndex from './components/Items/ItemIndex'
import ItemCreate from './components/Items/ItemCreate'
import CheckoutForm from './PaymentForm'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
// import MyProfile from './components/auth/MyProfile'
// import CartIndex from './components/Cart/CartIndex'
import clientSecret from './PaymentForm'

// can't call await without being within async func
// async function stripePromise() {
// 	return await loadStripe('pk_test_51LzixHFctdQVNwrZfvrkkfBX0bX2b6jWZ6eJnzYIPmUNh4vV5OueA9Ong8lbg5Y8lvaaHYRcBI6e0KZeiuKTixIk00nPUtcwLC')
// }

import MyProfile from './components/auth/MyProfile'
import CartIndex from './components/Cart/CartIndex'

const stripePromise = loadStripe('pk_test_51LzixHFctdQVNwrZfvrkkfBX0bX2b6jWZ6eJnzYIPmUNh4vV5OueA9Ong8lbg5Y8lvaaHYRcBI6e0KZeiuKTixIk00nPUtcwLC');


/////


const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	// Uncaught IntegrationError: Invalid value for elements(): clientSecret should be a client secret of the form ${id}_secret_${secret}.

	const options = {
		// passing the client secret obtained from the server
		clientSecret: '{sk_test_51LzixHFctdQVNwrZzTLKq1pxBXVc0Cf8DAm6ZEIo5H4plbKBQ0hbrHvwxsyvmbfDv1FXhEBspddY2Z5g3iTGc4TD00tfWqV3t4}',
	};

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment>
				<Header user={user} />
				<Routes>
					<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />

					<Route path='/my-profile' element={<MyProfile msgAlert={msgAlert} user={user} setUser={setUser}  />} />

					{/* <Route path='/my-profile' element={<MyProfile msgAlert={msgAlert} user={user} />} /> */}

					<Route
						path='/sign-up'
						element={<SignUp msgAlert={msgAlert} setUser={setUser}   />}
					/>
					<Route
						path='/sign-in'
						element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
					/>

          <Route
            path='/sign-out'
            element={
              <RequireAuth user={user}>
                <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
              </RequireAuth>}
          />
          <Route
            path='/change-password'
            element={
              <RequireAuth user={user}>
                <ChangePassword msgAlert={msgAlert} user={user} />
              </RequireAuth>}
          />
{/* be careful of your indentation throughout your code */}
					<Route
						path='/cart'
						element={
							<RequireAuth user={user}>
								<Elements stripe={stripePromise} secret={clientSecret}>
									<CheckoutForm/>
								</Elements>
							</RequireAuth>}
					/>
					<Route
						path='/sign-out'
						element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>}
					/>
					<Route
						path='/change-password'
						element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/>
					<Route path='/items' element={
						<RequireAuth user={user}>
							<ItemIndex msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/>
					<Route path='/items/:id' element={
						<RequireAuth user={user}>
							<ItemShow msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/>
					<Route
						path='/create'
						element={
						<RequireAuth user={user}>
							<ItemCreate msgAlert={msgAlert} user={user} />
						</RequireAuth>
						}
					/>
					<Route
						path='/cart'
						element={
						<RequireAuth user={user}>
							<CartIndex msgAlert={msgAlert} user={user} />
						</RequireAuth>
						}
					/>
					{/* <Route path='/checkout' element={
						<RequireAuth user={user}>
							<Checkout msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/> */}

				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App