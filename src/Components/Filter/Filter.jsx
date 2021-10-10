import React from 'react'
import drop from '../../Assets/icons/arrowDrop.svg';
import group from '../../Assets/icons/groupPeople.svg';
import './filter.css'

function Filter() {
	const handleFilter = (e) => {
		if (e.target.classList.contains('filter-btn')) {
			document.querySelectorAll('.filter-btn').forEach(btn => {		
				if(btn.classList.contains('active')) {
					btn.classList.remove('active')
					e.target.classList.add('active')
				}
			})
		}
		
	}
	return (
		<>
			<div className="container filter-container">
				<div className="d-flex filter-btns-container justify-content-between align-items-center">				
					<div className="filter-btns d-flex justify-content-between" onClick={handleFilter}>
						<div className='fw-bold filter-btn active'>All Posts(32)</div>
						<div className='fw-bold filter-btn'>Article</div>
						<div className='fw-bold filter-btn'>Event</div>
						<div className='fw-bold filter-btn'>Education</div>
						<div className='fw-bold filter-btn'>Job</div>
					</div>
					<div className="d-flex justify-content-between mr-4">
						<button className="button-write fw-bold">Write a Post <span><img src={drop} alt="down" /></span></button>
						<button className="button-join fw-bold text-light"><span><img src={group} alt="group" /></span> Join Group</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Filter