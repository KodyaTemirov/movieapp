import { useState } from 'react'
import s from './App.module.css'
import { Header, Container } from './components'
import axios from 'axios'

function App() {
	const [input, setInput] = useState('')
	const [data, setData] = useState('')

	const inputChange = e => {
		// setInput(e.target.value)
		axios
			.get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=a4159f8b`)
			.then(data => {
				setData(data?.data)
			})
	}

	const clickHandler = () => {}

	return (
		<>
			<Header />
			<Container>
				<input type='text' onChange={inputChange} />
				<button onClick={clickHandler}>Click</button>

				{data.Search && data.Search.map(item => <li>{item.Title}</li>)}
			</Container>
		</>
	)
}

export default App
