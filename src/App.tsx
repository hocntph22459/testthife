import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminProduct from './pages/admin/AdminProduct'
import AdminProductCreate from './pages/admin/AdminProductCreate'
import AdminProductUpdate from './pages/admin/AdminProductUpdate'
import HomePage from './pages/HomePage'
import LayoutClient from './layout/LayoutClient'
import LayoutAdmin from './layout/LayoutAdmin'
import Dasboard from './pages/Dasboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LayoutClient />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route index element={<Dasboard />} />
          <Route path='products'>
            <Route index element={<AdminProduct />} />
            <Route path='create' element={<AdminProductCreate />} />
            <Route path=':id/update' element={<AdminProductUpdate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
