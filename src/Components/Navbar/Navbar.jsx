import React,{useState,useContext,useEffect} from 'react'
import Logo from '../../Assets/logos/atgLogo.svg';
import searchIcon from '../../Assets/icons/search.svg'; 
import Avatar from '../Avatar/Avatar';
import {userContext} from '../../store/Contexts'
import './navbar.css';
import Modal from  '../Modal/Modal'


function Navbar({state}) {
	const {User} = useContext(userContext)
	const [size,setSize] = useState(window.innerWidth)

	const handleResize = (e) => {
		if (window.innerWidth < 990) {
			setSize(window.innerWidth)
		}else if (window.innerWidth < 772){
			setSize(window.innerWidth)
		}else {
			setSize(false)
		}
	}
	useEffect(() => {
		window.addEventListener('resize',handleResize)
		return () => {
			window.removeEventListener('resize',handleResize)
		};
	}, [size])
	return (
		<>
			{state.openModal && <Modal setOpenModal={state.setOpenModal}/>}
			<nav className='navbar navbar-expand-lg sticky-top'>
				<div className={`${(size < 990)? 'w-100 justify-content-around' : 'container'} d-flex align-items-center`}>
					<div className="logo">
						<img className='image-fluid logo-img' src={Logo} alt="Logo" />
					</div>
					<div className={`nav-search-input d-flex align-items-center px-2 `}>
						<img src={searchIcon} alt="search" />
          				<input type="text" className={`fw-bold px-2`}  placeholder='Search for your favorite group in ATG'/>						
					</div>
					<ul className="navbar-nav">
				        <li className="nav-item d-flex align-items-center">
          					<Avatar size={size} user={User} isUser={User ? true : false} setOpenModal={state.setOpenModal}/>
				        </li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar