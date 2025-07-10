import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Roadmaps from './pages/Roadmaps'

export default function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/roadmaps' element={<Roadmaps/>}/>
    </Routes>
    </>
    
  )
}
