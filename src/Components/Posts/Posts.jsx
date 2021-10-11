import React,{useContext} from 'react'
import Card from '../Cards/Cards';
import {data} from '../../data'
import Places from '../Places/Places';
import Recommended from '../Recommended/Recommended';
import {userContext} from '../../store/Contexts'
import './post.css'

function Posts() {
	const {User} = useContext(userContext)
	return (
		<>
			<div className='container mt-5' style={{width:'90%'}}>
				<div className="row">
					<div className="col ">
						<Card data={data}/>
					</div>
					<div className="col col-lg-5 col-small">
						<Places/>
						{User && <Recommended/>}
					</div>
				</div>
			</div>
		</>
	)
}

export default Posts