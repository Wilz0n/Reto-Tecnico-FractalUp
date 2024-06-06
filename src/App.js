import './styles.scss'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import VistaUno from './components/vistaUno/VistaUno'
import VistaDos from './components/vistaDos/VistaDos'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vista1' element={<VistaUno />} />
        <Route path='/vista2' element={<VistaDos />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
