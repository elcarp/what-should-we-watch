import React from 'react'

const Table = ({ data }) => {
	const fields = data.map((watchList) => {
		return watchList.fields
	})

	const newData =
		fields &&
		fields.filter(
			({ workingTitle, workingTitlePaul }) =>
				// console.log(workingTitle[0] == workingTitlePaul[0], 'match?')
				// console.log(workingTitle, 'lise', workingTitlePaul, 'paul?')
				workingTitle[0] == workingTitlePaul[0]
		)
	// console.log(newData, 'new?')

	return (
		<>
			{newData.map((watchList) => {
				return (
					<>
						<ul>
							<li>{watchList.workingTitle}</li>
						</ul>
					</>
				)
			})}
		</>
	)
}
export default Table
