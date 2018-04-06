import React from 'react'

const Climate = ({climate}) =>
	<div className="title" key={climate.id}>
		<h4>{climate.city}</h4>
		<p>{climate.temp}</p>
		<p>{climate.status}</p>
	</div>

export default Climate