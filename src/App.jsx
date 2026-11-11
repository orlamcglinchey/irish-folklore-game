import { useState } from 'react'
import Homepage from './pages/Homepage.jsx'
import Storiespage from './pages/Storiespage.jsx'
import Partspage from './pages/Partspage.jsx'
import './App.css'

function App() {
const [page,setPage] = useState('home')
  return (
    <main className="page">
      {page ==='home' && <Homepage onPlay={()=>setPage('stories')} />}
      {page ==='stories' && <Storiespage onSelect = {() =>setPage('parts')} />}
      {page ==='parts' && <Partspage />}
      </main>
  )
 
}

export default App
