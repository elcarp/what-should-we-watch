import React from 'react'

const Table = ({ data }) => {
	const fields = data.map((watchList) => {
		return watchList.fields
	})
	return (
		<>
			{fields.map((watchList) => {
				return (
					<>
						<ul>
							<li>{watchList.Title}</li>
						</ul>
					</>
				)
			})}
		</>
	)
}
export default Table
