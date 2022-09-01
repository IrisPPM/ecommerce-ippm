import Home from './pages/Home'
import Header from './components/Header/Header'
import { ProductProvider } from '@/context/ProductContext'
import { Routes, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Product from './pages/Product/Product'

function App () {
  return (
    <div className='App'>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/singleProduct' element={<SingleProduct />} />
          
         
        </Routes>
      </ProductProvider>
    </div>
  )
}

export default App
