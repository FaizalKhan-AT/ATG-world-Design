import React from 'react'
import drop from '../../Assets/icons/arrowDrop.svg';
import '../Navbar/navbar.css'

function Avatar({setOpenModal,isUser,user,size}) {
	return (
		<>
			{ isUser ? (
					<div style={{cursor:'pointer'}} className='d-flex align-items-center'>
						<img src={user.profile_image} width='30' alt={user.username} />
						<p className='m-0 ms-2'>{user.username}</p>
						<span className='text-primary signup-link'><img src={drop} alt="dropdown"/></span> 
					</div>
				) : (
					<p className={`m-0 fw-bold ${size ? `${(size < 772) ? 'h6' : ''}`: 'h5'} nav-create-link`}>
					   Create account. 
					   <span className='text-primary signup-link'onClick={() => setOpenModal(true)}>It's Free!<img width='25'src={drop} alt="dropdown"/></span> 
					</p>
				)
			}
		</>
	)
}

export default Avatar