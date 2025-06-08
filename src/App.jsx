import './App.css'
import Button from './components/Button/Button'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'

function App() {

  return (
    <>
      <Button text='Single Player' styleType='primary' onClickHandler={()=>console.log("Click me Single")}/>
      <Button text='Multi Player' styleType='primary' onClickHandler={() => console.log("Click me multi")} />

      <TextInputFormContainer />
      
    </>
  )
}

export default App
