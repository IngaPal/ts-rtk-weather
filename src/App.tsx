import './App.css'
import Data from './components/Data'
import Info from './components/Info'

function App() {
  return (
    <div className='wrapper'>
      <div className='main'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 info'>
              <Info />
            </div>
            <div className='col-sm-7 form'>
              <Data />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
