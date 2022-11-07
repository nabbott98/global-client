import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './header.css'

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const drowMenulinkStyle = {
    color: 'black',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
	<div id='drop-dwn-btn'>
			<Dropdown>
			<Dropdown.Toggle id="dropdown-button" variant="primary">
			My Store
			</Dropdown.Toggle>

			<Dropdown.Menu variant="primary">
			<Dropdown.Item><Link to="/create" style={drowMenulinkStyle}>Post item</Link></Dropdown.Item>
			<Dropdown.Item><Link to="/items" style={drowMenulinkStyle}>Browse items</Link></Dropdown.Item>
			
			</Dropdown.Menu>
			</Dropdown>
	  </div>
	  {/* MOVED THESE BTNS TO DROPDOWN MENU BTN */}
		{/* <Nav.Item className='ms-4'>
			<Link to='/items' style={linkStyle}>
				Browse Items
			</Link>
		</Nav.Item>
		<Nav.Item className='ms-4'>
			<Link to='/create' style={linkStyle}>
				Create Item
			</Link>
		</Nav.Item> */}


		<Nav.Item className='ms-4'>

			<Link to='#' style={linkStyle}>
			</Link>

			<Link to='/cart' style={linkStyle}>

				Cart
			</Link>
		</Nav.Item>
		<Nav.Item className='ms-4'>
			<Link to='my-profile' style={linkStyle}>
				My profile
			</Link>
		</Nav.Item>
		<Nav.Item className='ms-4 me-4'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>


        <Nav.Item className='ms-4'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='ms-4 me-4'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='ms-4'>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar id="navbar"  expand='md' >
		<Navbar.Brand>
			<Nav id="global-button"  className="position-absolute top-50 start-50 translate-middle">
            <Link to='/' style={linkStyle}>
                Global <img id="global-img" src='https://www.freeiconspng.com/thumbs/globe-png/globe-png-hd-1.png' alt='global'/>
            </Link>
			</Nav>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ms-auto'>
				{user && (
					<>
						<div id='welcome-div'>
						<span id='welcome span'>Hello {user.firstName}</span>
						</div>
					</>
			
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
