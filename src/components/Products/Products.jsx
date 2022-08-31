// import React, { useState, useEffect } from 'react'
// import { ItemApi } from '@/Api/ecommerceApi'
import './Products.scss'
import { useProductContext } from '@/context/ProductContext'

const Products = () => {
  const context = useProductContext()
  // const [products, setProducts] = useState([])
  // const [loading, setloading] = useState(true)

 /*  const getItemData = async () => {
    try {
      setloading(true)
      const res = await ItemApi.get('/item')
      setProducts(res.data)
      setloading(false)
    } catch (error) {
      console.log(error)
    }
  } */

/*   useEffect(() => {
    console.log('Hola Iris')
    getItemData()
  }, [producto]) */

  return (
    <>
      {context.loading
        ? <div> Loading...</div>
        : (
          <div className='product__wrapper'>

            {
            context.products.map((item, index) => (
              <div className='product' key={index}>
                <img className='product__img' src={item.image} alt={item.product_name} />
                <span className='product__title'> {item.product_name} </span>
                <p className='product__info'> {item.description}</p>
                <button> Ver más </button>
              </div>
            ))
            }

          </div>
          )}

    </>
  )
}

export default Products
