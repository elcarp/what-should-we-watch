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
						<a href={watchList.imdbLink}>
							<div className='movieWrapper block'>
								<div className='inner-wrap'>
									<h3 id='title'>{watchList.workingTitle}</h3>
									<span id='rating'>
										imdb rating: <strong>{watchList.imdbRating}</strong>
									</span>
									<span id='rating'>{watchList.runTime} min</span>
									<span id='rating'>{watchList.titleType}</span>
									<span id='genre'>{watchList.genres}</span>
								</div>
							</div>
						</a>
					</>
				)
			})}
		</>
	)
}
export default Table
