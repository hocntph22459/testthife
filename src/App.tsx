import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminProduct from './pages/AdminProduct'
import AdminProductCreate from './pages/AdminProductCreate'
import AdminProductUpdate from './pages/AdminProductUpdate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/products' Component={AdminProduct}></Route>
        <Route path='/admin/products/add' Component={AdminProductCreate}></Route>
        <Route path='/admin/products/:id/update' Component={AdminProductUpdate}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
