import React,{useState} from 'react'
import location from '../../Assets/icons/location.svg'
import pencil from '../../Assets/icons/edit.svg'
import clear from '../../Assets/icons/clear.svg'
import caution from '../../Assets/icons/error.svg'
import './places.css'

function Places() {
	const [inputVal,setInputVal] = useState('Noida, India')
	return (
		<>
			<div className="container">
				<div className='places-input-container d-flex justify-content-around align-items-center'>
					<img className='icon-places' src={location} alt="location" />
					<input className='fw-bold' defaultValue={inputVal} type="text" placeholder='Enter your location' onChange={(e)=> {
						setInputVal(e.target.value)
					}}/>
					{inputVal ?
						(<img className='icon-places' src={pencil} alt="edit"  />) :					
						(<img className='icon-places' src={clear} alt="clear" />)
					}					
				</div>
				<div className="warning my-4 d-flex">
					<span>
						<img className='icon-places me-2' src={caution} alt="caution" />
					</span>
					<p className='text-secondary'>
						Your location will help us serve better and extend a personalised experience.
					</p>
				</div>
			</div>
		</>
	)
}

export default Places