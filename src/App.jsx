import Home from './pages/Home'
import Header from './components/Header'
import { ProductProvider } from '@/context/ProductContext'

function App () {
  return (
    <div className='App'>
      <ProductProvider>
        <Header />
        <Home />
      </ProductProvider>
    </div>
  )
}

export default App
