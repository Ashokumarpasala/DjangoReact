import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import EmailSentComponent from './components/EmailSentComponent'

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route exact path='/' element={ <EmailSentComponent />} />
           </Routes>
        </Router>
    </>
  )
}

export default App
