import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/LAyout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import ProductDetail from './Pages/ProductDetail'
import CheckOut from './Pages/CheckOut'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='product/:id' element={<ProductDetail/>}/>
                    <Route path='/checkout' element={<CheckOut/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes