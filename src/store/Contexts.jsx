import React,{useState,createContext} from 'react'

export const userContext = createContext(null);
export default function Contexts({children}) {
	const [User,setUser] = useState(null);
	return (
		<>
			<userContext.Provider value={{User,setUser}}>
				{children}
			</userContext.Provider>
			
		</>
	)
}