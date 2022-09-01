import { useProductContext } from '@/context/ProductContext'

export const SingleProduct = () => {
  const context = useProductContext()
  return (
    <>{
      // context.selectedProduct.img
      <div>
        <img src={context.selectedProduct.image} alt={context.selectedProduct.product_name} />
        <span className='product__title'> nombre </span>
        <p className='product__info'> descripcion</p>
        <button>Share</button>
        <button>Learn More</button>
      </div>
        }
    </>
  )
}

export default SingleProduct
