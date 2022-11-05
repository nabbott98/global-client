import React from 'react'
import './home.css'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div id='main-page-body'>
			<h2 id='global-text'>Successful 
				<span id='E-letter'>E</span> Business, Global Web!
			</h2>
			<div class="container"> 
			{/* <img id='img' src='https://www.freeiconspng.com/thumbs/globe-png/globe-png-hd-1.png' /> */}
			<div id="search-box">
				{/* <input id="input"></input>
				<button id="search">Search</button> */}
				{/* <form>
				<input type="search" placeholder="Search..."/>
				<button type="submit">Search</button>
				</form> */}
			</div>
			<div className="container">
				<form id="form-search-button">
				<input id="input-search" type="search" placeholder="Search..."/>
				<button id="input-button" type="submit">Search</button>
				</form>
			</div>
		</div>
		</div>
	)
}

export default Home
