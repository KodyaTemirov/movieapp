import { useState, useEffect } from 'react'
import s from './App.module.css'
import { Header, Container, Card, Input } from './components'
import axios from 'axios'
import clsx from 'clsx'
function App() {
	const [input, setInput] = useState('titanic')
	const [data, setData] = useState('')

	useEffect(() => {
		return () => {
			getData(input)
		}
	}, [])

	const inputChange = e => {
		setInput(e.target.value)
	}

	const getData = value => {
		axios
			.get(`http://www.omdbapi.com/?s=${value}&apikey=a4159f8b`)
			.then(({ data }) => {
				setData(data)
			})
	}

	const onEnter = ({ code }) => {
		if (code === 'Enter') {
			getData(input)
		}
	}

	return (
		<>
			<Header>
				<Input type='text' onChange={inputChange} onKeyDown={onEnter} />
			</Header>
			<Container>
				<div className={clsx(s.cards, s.mainContainer)}>
					{data.Search &&
						data.Search.map(({ Title, Poster, imdbID, Year, Type }, index) => {
							return (
								<Card
									title={Title}
									poster={Poster}
									id={imdbID}
									key={imdbID}
									year={Year}
									type={Type}
								/>
							)
						})}
				</div>
			</Container>
		</>
	)
}

export default App
