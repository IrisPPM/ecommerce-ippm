// import React, { useState, useEffect } from 'react'
// import { ItemApi } from '@/Api/ecommerceApi'
import './Products.scss'
import { useProductContext } from '@/context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const context = useProductContext()
  const navigate = useNavigate()

  return (
    <>
      {context.loading
        ? <div> Loading...</div>
        : (
          <div className='product__wrapper'>

            {
            context.products.map((item, index) => (

              <div className='product' key={index}>
                <div className='product__content'>
                  <img className='product__img' src={item.image} alt={item.product_name} />
                  <span className='product__title'> {item.product_name} </span>
                  <p className='product__info'> {item.description}</p>
                </div>
                <button
                  className='btn__card' onClick={() => {
                    context.setSelectedProduct(item)
                    navigate('/singleProduct')
                  }}
                >Ver más
                </button>
              </div>

            ))
            }

          </div>
          )}

    </>
  )
}

export default Products
