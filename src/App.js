import logo from './logo.svg'
import './App.css'
import Airtable from 'airtable'

Airtable.configure({ apiKey: 'keyatPBLuCw55EzkH' })
const base = require('airtable').base('appvm5Bc0t8tzI7Gy')
console.log(base, 'base?')
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
