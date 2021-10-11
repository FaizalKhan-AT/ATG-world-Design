import React,{useState} from 'react'
import back from '../../Assets/icons/back.svg'
import './banner.css'
function Banner() {
	const [join,setJoin] = useState(false)
	return (
		<>
			<nav className=' position-absolute w-100 d-flex justify-content-between'>			
				<div className='mobile-buttons p-3'>					
					<img  style={{cursor:'pointer'}} src={back} alt="back" />
					<button className='button-join-leave fw-bold text-light border border-light' 
					onClick={()=>setJoin(!join)}>{join ? 'Leave Group' :"Join Group"}</button>
				</div>
			</nav>
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