import React from 'react'

const Table = ({ data }) => {
	const fields = data.map((watchList) => {
		return watchList.fields
	})

	const newData =
		fields &&
		fields.filter(
			({ workingTitle, workingTitlePaul }) =>
				workingTitle[0] == workingTitlePaul[0]
		)

	return (
		<>
			{newData.map((watchList) => {
				return (
					<>
						<div className='movieWrapper block'>
							<span className='title'>{watchList.workingTitle}</span>
						</div>
					</>
				)
			})}
		</>
	)
}
export default Table
