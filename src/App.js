import './App.css'
import Airtable from 'airtable'
import axios from 'axios'
import useData from './useData'
import { useEffect } from 'react'

new Airtable({ apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}` }).base(
	process.env.REACT_APP_AIRTABLE_BASE_ID
)
axios.defaults.baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/lise/`
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers[
	'Authorization'
] = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`

function App() {
	const { data, getData } = useData()
	useEffect(() => {
		async function onPageLoad() {
			await getData()
		}
		onPageLoad()
	}, [])

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>What should we watch?</h1>
				<div>Here's what we can agree on:</div>
				<div></div>
			</header>
		</div>
	)
}

export default App
