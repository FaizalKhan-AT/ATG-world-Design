import React,{useState,useContext} from 'react'
import close from '../../Assets/icons/cancel.svg'
import closeBlack from '../../Assets/icons/cancelBlack.svg'
import eye from '../../Assets/icons/visibility.svg'
import illustration from '../../Assets/logos/atg_illustration.svg'
import google from '../../Assets/logos/google.png'
import facebook from '../../Assets/logos/fb.png';
import {userContext} from '../../store/Contexts'
import {user} from '../../data'
import './modal.css';

function Modal({setOpenModal}) {
	const {setUser} = useContext(userContext)
	const [showPassword,setShowPassword] = useState(false);
	const [switchPage,setSwitchPage] = useState(false);
	const handleAuth = () => {
		setUser(user)
		setOpenModal(false)
	}

	return (
		<>
			<div className='modal-container container'>
				<div className="modal-overlay" onClick={() => setOpenModal(false)}></div>
				<div className="signup-login-modal">
					<div className='message-top text-center'>
						<p className='py-2'>
							Let's learn, share & inspire each other withour passion for computer engineering. Sign up now 🤟 
						</p>						
						<button title='close' className='modal-close-btn' onClick={()=>setOpenModal(false)}>
							<img className='white-close' src={close} alt="close"/>
							<img className='black-close' src={closeBlack} alt="close"/>
						</button>
					</div>
					<div className="container">	
						<div className="row mt-2">
							<div className="col">
								<div className='d-flex justify-content-between align-items-center'>
									<div className="h3 modal-title mb-3 fw-bolder d-flex justify-content-start">{switchPage ? "Create Account" : "Sign In" }</div>
									<div className="h3 modal-title-mobile mb-3 fw-bolder d-flex justify-content-start">{switchPage ? "Create Account" : "Welcome back!" }</div>
									<button title='close' className='black-close' onClick={()=>setOpenModal(false)}>
										<img  src={closeBlack} alt="close"/>
									</button>
								</div>
								<div className="form-container mt-4">
									<div className="d-flex form-elements flex-column align-items-center">
										{switchPage && 
										<span className=' input-containers d-flex'>
											<input style={{borderRadius:'2px 0 0 0'}} className='col modal-input f-name-inp' type="text" placeholder='First Name' />
											<input style={{borderRadius:'0 2px 0 0'}} className='col modal-input l-name-inp' type="text" placeholder='Last Name' />
										</span>
										}
										<input  style={{borderRadius:`${switchPage ? '0' :'2px 2px 0 0' }`}}className='input-email px-2 fw-bold' type="email"placeholder='Email' />
										<span className='position-relative password-inp-container'>											
											<input style={{borderRadius:`${switchPage ? '0' :' 0 0 2px 2px' }`}} className='input-password px-2 fw-bold' type={showPassword ? "text" : "password"} placeholder='Password'/>
											<img className='modal-eye-icon'src={eye} alt="visibility" onClick={() => setShowPassword(!showPassword)} />
										</span>
										{switchPage && <input style={{borderRadius:'0 0 2px 2px'}} className='input-email px-2 fw-bold' type="password" placeholder='Confrim Password' />}										
										<div className='desktop-submit w-100 d-flex justify-content-between px-3 align-items-center'>
											<button className='form-submit-button mt-3 fw-bolder text-light' onClick={handleAuth}>{switchPage ? "Create Account" : "Sign In" }</button>
											<p className='m-0 mobile-text-b fw-bold text-center mt-2' onClick={()=>setSwitchPage(!switchPage)}>{switchPage ? "or" : "or" }, {switchPage ? "Sign In" : "Create Account"}</p>																														
										</div>
									</div>
								</div>
								<div className="social-logins">
									<div className='text-center'>									
										<button className='social-button mt-3 ' onClick={handleAuth}>
											<img className='me-2' width='20' src={facebook} alt="fb" />										
											<span>{switchPage ? "Sign up" : "Sign in" }</span> with FaceBook
										</button>
										<button className='social-button mt-3 ' onClick={handleAuth}>
											<img className='me-2' width='20' src={google} alt="google" />																				
											<span>{switchPage ? "Sign up" : "Sign in" }</span> with Google
										</button>								
									</div>
									{switchPage && <p className='mobile-privacy-para my-2 text-secondary w-100 text-center'>By signing up, you agree to our Terms & conditions, Privacy policy.</p>}
									{switchPage ? "" : <p className='forgot-link text-center fw-bold mt-3'>Forgot Password?</p>}									
									<p className='switch-route-para d-none text-center'>{switchPage ? "Already have an account ?" : "Don't have an account yet ?" }<span className='create-acc-link text-primary fw-bolder' onClick={()=>setSwitchPage(!switchPage)}> {switchPage ? "Sign In" : "Create new for free"}</span></p>									
								</div>
							</div>
							<div className="col col-image  mt-2">
								<p className='switch-route-p'>{switchPage ? "Already have an account ?" : "Don't have an account yet ?" }<span className='create-acc-link text-primary fw-bolder' onClick={()=>setSwitchPage(!switchPage)}> {switchPage ? "Sign In" : "Create new for free"}</span></p>
								<img src={illustration} alt="atg illustration"/>							
								{switchPage && <p className='text-secondary w-100 text-center'>By signing up, you agree to our Terms & conditions, Privacy policy.</p>}								
							</div>
						</div> 
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal