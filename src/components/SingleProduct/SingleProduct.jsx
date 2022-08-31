import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemApi } from '../../Api/ecommerceApi'

export const SingleProduct = () => {
  const [product, setProduct] = useState({})
  const [loading, setloading] = useState(true)
  const { idItem } = useParams()

  const getProductData = async () => {
    try {
      setloading(true)
      const res = await ItemApi.get(`/item/${idItem}`)
      setProduct(res.data)
      setloading(false)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductData()

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loading
        ? <h1> Cargando ... </h1>
        : (<div>
          component="img"
          height="140"
          image={product.image}
          alt={product.product_name}
          <span className='product__title'> nombre </span>
          <p className='product__info'> descripcion</p>
          <div>
            <button size='small'>Share</button>
            <button size='small'>Learn More</button>
          </div>
           </div>
          )}
    </>
  )
}
