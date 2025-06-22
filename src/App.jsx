import { Route, Routes } from 'react-router-dom'
import './App.css'
import Button from './components/Button/Button'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import PlayGameContainer from './components/PlayGameContainer/PlayGameContainer'
import { WordContext} from './context/WordContext.js'
import { useState } from 'react'

function App() {

  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');

  return (
    <>
      <WordContext.Provider value={{wordList,setWordList,word, setWord,hint, setHint}}>
        <Routes>
          <Route path='/start' element={ <StartGame/>} />
          <Route path='/play' element={ <PlayGameContainer/>} />
          <Route path='/' element={<Home/> } />
        </Routes>
      </WordContext.Provider>
      
    </>
  )
}

export default App
