import React,{useState} from 'react'
import close from '../../Assets/icons/cancel.svg'
import eye from '../../Assets/icons/visibility.svg'
import illustration from '../../Assets/logos/atg_illustration.svg'
import google from '../../Assets/logos/google.png'
import facebook from '../../Assets/logos/fb.png'
import './modal.css';

function Modal({setOpenModal}) {
	const [showPassword,setShowPassword] = useState(false);
	const [switchPage,setSwitchPage] = useState(false)
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
							<img src={close} alt="close"/>
						</button>
					</div>
					<div className="container">	
						<div className="row mt-2">
							<div className="col">
								<div className="h3 modal-title fw-bolder d-flex justify-content-start">{switchPage ? "Create Account" : "Sign In" }</div>
								<div className="form-container mt-4">
									<div className="d-flex form-elements flex-column align-items-center">
										{switchPage && 
										<span style={{width:'81.5%'}} className='input-group row'>
											<input style={{borderRadius:'2px 0 0 0'}} className='col modal-input' type="text" placeholder='First Name' />
											<input style={{borderRadius:'0 2px 0 0'}} className='col modal-input' type="text" placeholder='Last Name' />
										</span>
										}
										<input  style={{borderRadius:`${switchPage ? '0' :'2px 2px 0 0' }`}}className='input-email px-2 fw-bold' type="email"placeholder='Email' />
										<span className='position-relative'>											
											<input style={{borderRadius:`${switchPage ? '0' :' 0 0 2px 2px' }`}} className='input-password px-2 fw-bold' type={showPassword ? "text" : "password"} placeholder='Password'/>
											<img className='modal-eye-icon'src={eye} alt="visibility" onClick={() => setShowPassword(!showPassword)} />
										</span>
										{switchPage && <input style={{borderRadius:'0 0 2px 2px'}} className='input-email px-2 fw-bold' type="password" placeholder='Confrim Password' />}										
										<button className='form-submit-button mt-3 fw-bolder text-light'>{switchPage ? "Create Account" : "Sign In" }</button>
									</div>
								</div>
								<div className="social-logins">
									<div className='text-center'>									
										<button className='social-button mt-3 '>
											<img className='me-2' width='20' src={facebook} alt="fb" />										
											<span>{switchPage ? "Sign up" : "Sign in" }</span> with FaceBook
										</button>
										<button className='social-button mt-3 '>
											<img className='me-2' width='20' src={google} alt="google" />																				
											<span>{switchPage ? "Sign up" : "Sign in" }</span> with Google
										</button>								
									</div>
									{switchPage ? "" : <p className='forgot-link text-center fw-bold mt-3'>Forgot Password?</p>}
								</div>
							</div>
							<div className="col mt-2">
								<p>{switchPage ? "Already have an account ?" : "Don't have an account yet ?" }<span className='create-acc-link text-primary fw-bolder' onClick={()=>setSwitchPage(!switchPage)}> {switchPage ? "Sign In" : "Create new for free"}</span></p>
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