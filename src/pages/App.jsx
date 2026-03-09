import { useNavigate, useParams } from 'react-router-dom'
import './App.scss'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import Body from '../components/Body'

const acceptedLanguages = ['fr', 'en']

const App = () => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    const lang = params.lang
    if(!lang || acceptedLanguages.indexOf(lang) < 0 || params['*']) navigate('/fr')
  }, [params, navigate])

  return (
    <div className="App">
      <Nav/>
      <div className="AppContainer">
        <div className="AppContent">
          <Body>{'Hello World !'}</Body>
        </div>
      </div>
    </div>
  )
}

export default App
