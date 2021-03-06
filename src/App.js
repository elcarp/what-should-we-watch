import './App.css'
import Airtable from 'airtable'
import axios from 'axios'
import useData from './useData'
import { useEffect } from 'react'
import Table from './table'
import ListMovies from './listMovies'

new Airtable({ apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}` }).base(
	process.env.REACT_APP_AIRTABLE_BASE_ID
)
let tableName = 'junction'
axios.defaults.baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/`
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
				<h1>What should Lise & Paul watch?</h1>
				<div>Here's what we agree on:</div>
				<div>
					{data && (
						<>
							<div className='wrapper flex'>
								<Table data={data} />
							</div>
							<div className='flex'>
								<div>
									<h3>Lise's List</h3>
									<ListMovies data={data} />
								</div>
							</div>
							<div>
								<h3>Paul's List</h3>
							</div>
						</>
					)}
				</div>
			</header>
		</div>
	)
}

export default App
