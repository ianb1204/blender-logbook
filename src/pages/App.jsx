import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import './App.scss'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Body from '../components/Body'
import breadcrumbs from './../content/breadcrumbs.json'
import { useTranslation } from 'react-i18next'

const acceptedLanguages = ['fr', 'en']

const App = () => {
  const { i18n } = useTranslation()
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    const lang = params.lang
    if(!lang || acceptedLanguages.indexOf(lang) < 0) navigate('/fr')
    else i18n.changeLanguage(lang)
    
    const currentBreadcrumbs = breadcrumbs[lang]
    if(currentBreadcrumbs){
      const pages = Object.keys(currentBreadcrumbs)
      const tab = params['*'].split('/')
      if(tab[0] && tab[0] !== currentPage || !tab[0] && currentPage !== 'home'){
        if(tab[0]){
          if(pages.indexOf(tab[0]) >= 0) setCurrentPage(tab[0])
          else navigate('/' + lang)
        }
        else setCurrentPage('home')
      }
    }
  }, [params, navigate])

  const onCurrentPageChanged = (lang, pageId) => {
    navigate('/' + lang + (pageId ? '/' + pageId : ""))
  }

  if(!breadcrumbs[params.lang]) return null

  return (
    <div className="App">
      <Nav currentPage={currentPage} setCurrentPage={onCurrentPageChanged} breadcrumbs={breadcrumbs[params.lang]}/>
      <div className="AppContainer">
        <div className="AppContent">
          <Routes>
            <Route path={'/'} element={<>{"Hello World - 1"}</>}/>
            <Route path={'/home'} element={<>{"Hello World - 1"}</>}/>
            <Route path={'/*'} element={<>{"Hello World - 2"}</>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
