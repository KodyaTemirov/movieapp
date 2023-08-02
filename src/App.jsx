import { useState, useEffect, useRef } from 'react'
import s from './App.module.css'
import { Header, Container, Card, Input, Dropdown } from './components'
import axios from 'axios'
import clsx from 'clsx'
function App() {
	const [input, setInput] = useState('titanic')
	const [open, setOpen] = useState(false)
	const [array, setArray] = useState([
		{
			id: '1',
			value: 'series',
			checked: true,
		},
		{
			id: '2',
			value: 'movie',
			checked: false,
		},
		{
			id: '3',
			value: 'episode',
			checked: false,
		},
	])

	const [data, setData] = useState('')
	const dropdownRef = useRef(null)

	useEffect(() => {
		return () => {
			getData(input)
		}
	}, [])

	const inputChange = e => {
		setInput(e.target.value)
	}
	const currentType = array.filter(item => item.checked)[0].value
	console.log(currentType[0].value)
	const getData = value => {
		axios
			.get(
				`http://www.omdbapi.com/?s=${value}&apikey=a4159f8b&type=${currentType}`
			)
			.then(({ data }) => {
				setData(data)
			})
	}

	const onEnter = ({ code }) => {
		if (code === 'Enter') {
			getData(input)
		}
	}

	const dropdownHandler = () => {
		setOpen(prev => {
			return !prev
		})
	}
	const handleClickOutside = event => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])
	const onClickItem = id => {
		const newArray = array.map(item => {
			return item.id === id
				? { ...item, checked: !item.checked }
				: { ...item, checked: false }
		})
		setArray(newArray)
		setOpen(false)
	}

	return (
		<>
			<Header>
				<Input type='text' onChange={inputChange} onKeyDown={onEnter} />
				<Dropdown
					selected={currentType}
					open={open}
					onClickItem={onClickItem}
					onClick={dropdownHandler}
					dref={dropdownRef}
					array={array}
				/>
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
