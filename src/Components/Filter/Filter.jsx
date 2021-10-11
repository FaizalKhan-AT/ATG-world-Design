import React,{useContext} from 'react'
import drop from '../../Assets/icons/arrowDrop.svg';
import group from '../../Assets/icons/groupPeople.svg';
import leave from '../../Assets/icons/exit.svg';
import {userContext} from '../../store/Contexts'
import './filter.css'

function Filter() {
	const {User} = useContext(userContext)
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
			<div className="filter-container">
			<div className="p-2 px-3 container fw-bold w-100 mobile-filter d-flex align-items-center justify-content-between">
				<p className="m-0 fs-5">Posts(362)</p>
				<div className='mobile-dropdown'>
					<p className="m-0 d-flex align-items-center">Filter: All 
					<span><img src={drop} alt="down" /></span></p>
				</div>
			</div>
				<div className="d-flex filter-btns-container justify-content-between align-items-center">				
					<div className="filter-btns d-flex justify-content-between" onClick={handleFilter}>
						<div className='fw-bold filter-btn active'>All Posts(32)</div>
						<div className='fw-bold filter-btn'>Article</div>
						<div className='fw-bold filter-btn'>Event</div>
						<div className='fw-bold filter-btn'>Education</div>
						<div className='fw-bold filter-btn'>Job</div>
					</div>
					<div className="d-flex justify-content-between">
						<button className="button-write fw-bold">Write a Post <span><img src={drop} alt="down" /></span></button>
						{User ?
							<button className="button-leave fw-bold text-secondary"><span><img className="me-2" src={leave} alt="leave" /></span> Leave Group</button>							
							:<button className="button-join fw-bold text-light"><span><img src={group} alt="group" /></span> Join Group</button>
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default Filter