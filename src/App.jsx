import { Route, Routes } from 'react-router-dom'
import './App.css'
import Button from './components/Button/Button'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import PlayGameContainer from './components/PlayGameContainer/PlayGameContainer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/start' element={ <StartGame/>} />
        <Route path='/play' element={ <PlayGameContainer/>} />
        <Route path='/' element={<Home/> } />
      </Routes>
      
    </>
  )
}

export default App
