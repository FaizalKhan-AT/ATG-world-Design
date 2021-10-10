import React,{useState} from 'react'
import Logo from '../../Assets/logos/atgLogo.svg';
import drop from '../../Assets/icons/arrowDrop.svg';
import searchIcon from '../../Assets/icons/search.svg'; 
import './navbar.css';
import Modal from  '../Modal/Modal'


function Navbar() {
	const [openModal,setOpenModal] = useState(false)
	return (
		<>
			{openModal && <Modal setOpenModal={setOpenModal}/>}
			<nav className='navbar navbar-expand-lg sticky-top'>
				<div className="container d-flex align-items-center">
					<div className="logo">
						<img className='image-fluid'src={Logo} alt="Logo" />
					</div>
					<div className='nav-search-input d-flex align-items-center px-2 '>
						<img src={searchIcon} alt="search" />
          				<input type="text" className='fw-bold px-2'  placeholder='Search for your favorite group in ATG'/>						
					</div>
					<ul className="navbar-nav">
				        <li className="nav-item d-flex align-items-center">
          					<div className="lead fw-bold nav-create-link">
          					Create account. <span className='text-primary signup-link'onClick={() => setOpenModal(true)}>It's Free!<img src={drop} alt="dropdown"/></span> 
          					</div>
				        </li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar