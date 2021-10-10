import React from 'react'
import './banner.css'
function Banner() {
	return (
		<>
			<div className="banner">
				<div className="overlay"></div>
				<div className='container banner-texts text-light d-flex flex-column justify-content-end h-100'>
					<h1>Computer Engineering</h1>
					<p className='mb-3'>142,765 Computer Engineers follow this.</p>
				</div>					
			</div>
		</>
	)
}

export default Banner;