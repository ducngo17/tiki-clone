import React, { useEffect, useState, createContext } from 'react';
import Header from './components/Header';
import './styles/index.css'
import Commitment from './components/Commitment';
import Main from './components/Main';
import Footer from './components/Footer';
import axios from 'axios';
import OverlayPageInput from './components/OverlayPageInput';
import WidgetChat from './components/WidgetChat';
import Popup from './components/Popup';
export const dataContext = createContext()

const App = () => {
  const [books, setBooks] = useState([])
  //true --> grey backround overlays, false --> normal
  const [isInputClicked, setIsInputClicked] = useState(false)
  const [isAccountClicked, setIsAccountClicked] = useState(false)
  //false --> full book list, true = filtered book list
  const [isFiltered, setIsFiltered] = useState(false)
  const [query, setQuery] = useState('')

  const [numOfShowMoreClicked, setNumOfShowMoreClicked] = useState(0)

  const [filteredClick, setFilteredClick] = useState([0,0,0]);
  //[ship2h, topdeal, freeship]

  const handleBooks = (value) => {
    setBooks(value)
  }

  const handleIsInputClicked = (value) => {
    setIsInputClicked(value)
  }
  const handleIsAccountClicked = (value) => {
    setIsAccountClicked(value)
  }

  const handleIsFiltered = (value) => {
    setIsFiltered(value)
  }

  const handleQuery = (value) => {
    setQuery(value)
  }

  const handleNumOfShowMoreClicked = () => {
    setNumOfShowMoreClicked(numOfShowMoreClicked + 1)
  }

  const handleFilteredClick = (input) => {
    input === 'ship2h' && setFilteredClick((prevs) => prevs.map((prev, i) => i === 0 ? !prev : prev)) 
    input === 'topdeal' && setFilteredClick((prevs) => prevs.map((prev, i) => i === 1 ? !prev : prev))
    input === 'freeship' && setFilteredClick((prevs) => prevs.map((prev, i) => i === 2 ? !prev : prev))
  }
  

  useEffect(() => {
    axios.get(`http://localhost:4000/products/showmore/${numOfShowMoreClicked}`, {
      mode: 'no-cors'
    })
      .then(response => setBooks(response.data));
  }, []);


  return (
    <>
      <dataContext.Provider value={{books, handleBooks, handleIsInputClicked, isFiltered, handleIsFiltered, query, handleQuery, numOfShowMoreClicked, handleNumOfShowMoreClicked, isAccountClicked, handleIsAccountClicked, filteredClick, handleFilteredClick}}>
        <Header />
        <Commitment />
        {isInputClicked && <OverlayPageInput />}
        <Main />
        {/* <Popup/> */}
        <Footer />
        <WidgetChat/>
      </dataContext.Provider>
    </>
  )
}

export default App