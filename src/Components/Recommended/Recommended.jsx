import React,{useState} from 'react'
import like from '../../Assets/icons/thumb.svg'
import {groups} from '../../data'
import './recommended.css'

function Recommended() {
	const [isFollowing,setIsFollowing] = useState(false)
	return (
		<>
			<div className="container mt-4">
				<div className="text-uppercase fw-bold d-flex align-items-center">
					<img className='me-2'src={like} alt="like" />
					recommended groups
				</div>
				<div className='mt-2 groups-container'>
					{
						groups.map((group,index) => {
							return (
								<div key={index} className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center p-3 ps-1">
										<img src={group.group_profile} width='35' alt={group.group_name} />
										<p className='fw-bold m-0 ms-2'>{group.group_name}</p>
									</div>
									<div onClick={() => {
											setIsFollowing(!isFollowing)
											group.is_following = isFollowing
									}}>
										<button className={group.is_following ? 'follow-btn following text-light' :'follow-btn'}>{group.is_following ? "Followed" :'Follow'}</button>
									</div>
								</div>
							)
						})
					}
				</div>
				<div style={{width:'75%'}} className="mt-3 d-flex justify-content-end">
					<p className="text-primary seemore-link">See More...</p>
				</div>
			</div>
		</>
	)
}

export default Recommended