import React,{useState} from 'react';
import './App.css';
import pen from './Assets/icons/pencil.svg'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Filter from './Components/Filter/Filter';
import Posts from './Components/Posts/Posts';
import Contexts from './store/Contexts';

function App() {
  const [openModal,setOpenModal] = useState(false)
  return (
    <>
      <Contexts>
        <div className="App">
          <button className="edit-pencil" onClick={() => setOpenModal(true)}>
            <img src={pen} alt="pencil" />
          </button>
          <Navbar state={{openModal,setOpenModal}}/>
          <Banner/>
          <Filter/>
          <Posts/>
        </div>
      </Contexts>
    </>
  );
}

export default App;
