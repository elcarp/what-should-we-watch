import React from 'react'

const ListMovies = ({ data }) => {
	const fields = data.map((watchList) => {
		return watchList.fields
	})

	const newData =
		fields && fields.filter(({ workingTitle, item }) => workingTitle[0])
	const liseList = newData.map((liseList) => {
		return liseList.workingTitle
	})
	console.log(
		liseList.filter((item, index) => liseList[0].indexOf(item) !== index),
		'lise'
	)

	return (
		<>
			{newData.map((watchList) => {
				return (
					<>
						<a className='movie-list' href={watchList.imdbLink}>
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
export default ListMovies
