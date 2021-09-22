import './App.css'
import Airtable from 'airtable'

require('dotenv').config()
var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
)
const table = base(process.env.AIRTABLE_TABLE_NAME)

module.exports = { table }

function App() {
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
