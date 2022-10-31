import React from 'react'
import './home.css'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
		<div id='main-page-body'>
			<h2 id='global-text'>Global Online</h2>
			<img id='img' src='https://www.freeiconspng.com/thumbs/globe-png/globe-png-hd-1.png' />
			<div id="search-box">
				<input id="input"></input>
				<button id="search">Search</button>
			</div>
		</div>
		</>
	)
}

export default Home
