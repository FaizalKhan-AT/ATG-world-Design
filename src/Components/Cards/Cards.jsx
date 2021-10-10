import React,{useRef} from 'react'
import more from '../../Assets/icons/moreIcon.svg'
import eye from '../../Assets/icons/visibility.svg'
import share from '../../Assets/icons/share.svg'
import location from '../../Assets/icons/location.svg'
import calender from '../../Assets/icons/calender.svg'
import briefcase from '../../Assets/icons/work.svg'
import './cards.css'
function Cards({data}) {
	const menuRef = useRef()
	const buttonRef = useRef()
	const handleMenuOpen = (e) => {
		// document.querySelectorAll('.tooltip-card').forEach(card=> {
		// 	card.classList.toggle('tooltip-active');
		// 	if(card.classList.contains('tooltip-active')) {
		// 		card.classList.remove('tooltip-active')
		// 		e.currentTarget.classList.add('tooltip-active')
		// 		console.log('hai',e.currentTarget.classList.add('tooltip-active'))
		// 	}	  		  		
		// })
	}
	return (
		<>
		 	{data.map((post,index) => {
			 	return (
		 			<div key={index} className="card  mb-2" style={{width:'91%'}}>
		 			 	{post.post_image && <img src={post.post_image} className="card-img-top" alt={post.title}/>}
		 				<div className="card-body p-3">
		 					<p>{post.type}</p>
		 					<div className="d-flex justify-content-between card-title-more" >		 						
			 					<h5 className='card-title'>{post.title}</h5>
			 					<span>			 						
			 					<img className='more-btn' height='30'src={more} alt="more" ref={buttonRef}  onClick={handleMenuOpen}/>
			 					<div ref={menuRef} className="tooltip-card p-2 position-absolute">
			 						<p className="m-0 ms-2 my-1">Edit</p>
			 						<p className="m-0 ms-2 my-1">Report</p>
			 						<p className="m-0 ms-2 my-1">Option 3</p>
			 					</div>
			 					</span>
		 					</div>
		 					{post.place &&<div className='d-flex fw-bold align-items-center'>
		 						<p className='me-3'><span><img src={`${post.date ? calender : ''}${post.event ? briefcase : ''}`} alt={post.date ? "calender" : 'briefcase'} /></span> {`${post.date ? post.date :''}${post.event ?  post.event : ''}`}</p>
		 						{post.place && <p><span><img src={location} alt="location" /></span> {post.place}</p>}
		 					</div>}
		 					{post.place &&<button style={{color: `${post.date ? "#ff922b" :''}${post.event ?  "#21c997" : ''}`}} className='btn w-100 card-button fw-bold'>
		 						{`${post.date ? post.button_text :''}${post.event ?  post.button_text : ''}`}
		 					</button>}
			 				<p className='card-text'>{post.description}</p>
			 				<div className='d-flex align-items-center justify-content-between'>
			 					<div className='d-flex align-items-center'>			 						
			 						<img height='35'src={post.profile_image} alt="user" />
			 						<p className='card-text ms-3 h5'>{post.username}</p>
			 					</div>
			 					<div className='d-flex align-items-center'>
			 						<p style={{marginBottom:'0',marginTop:'0'}}><span className="me-1"><img src={eye} alt="eye"/></span>{post.post_views} Views</p>
			 						<div className='ms-3 btn share-btn' style={{background: '#dee2e6'}}>
			 							<img src={share} alt="share"/>
			 						</div>
			 					</div>
			 				</div>
		 				</div>
		 			</div>	
			 	)
			})}
		</>
	)
}

export default Cards