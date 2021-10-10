import React from 'react'
import Card from '../Cards/Cards';
import {data} from '../../data'
import Places from '../Places/Places';
import './post.css'

function Posts() {
	return (
		<>
			<div className='container mt-5' style={{width:'90%'}}>
				<div className="row">
					<div className="col ">
						<Card data={data}/>
					</div>
					<div className="col col-lg-5">
						<Places/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Posts