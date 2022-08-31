import { useState, useEffect, useContext, createContext } from 'react'

import { ItemApi } from '@/Api/ecommerceApi'

const ProductContext = createContext()

function ProductProvider (props) {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})
  const [loading, setloading] = useState(true)

  const getItemData = async () => {
    try {
      setloading(true)
      const res = await ItemApi.get('/item')
      setProducts(res.data)
      setloading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('Hola Iris')
    getItemData()
  }, [])

  const value = {
    products,
    selectedProduct,
    setSelectedProduct,
    loading
  }

  return (
    <ProductContext.Provider value={value} {...props} />
  )
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export {
  ProductProvider,
  useProductContext
}
