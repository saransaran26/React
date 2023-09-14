import React from 'react'
import './ProductList.css'
import { useNavigate, useParams } from 'react-router-dom'
import { productlist } from './product'
import {useDispatch} from 'react-redux'


function ProductList() {
    const params = useParams()
    const dispatch = useDispatch()
    const item = productlist.find((element)=>element.id === parseInt(params.id))
    const navigate = useNavigate()

    const handleitem = () => {
        dispatch(additem(props))
    }
  return (
    <div className='card mt-4 m-3 product'>
        <div  className='imgs'>
            <img src={item.thumbnail} alt={item.title} height={350} width={380}/>
        </div>
        <div className="card-body">
            <div className="card-title">
                <h4 className='text-center mt-2'>{item.title}</h4>
                <h6 className='text-center mt-2'>Price : {item.price}</h6>
                <h6 className='text-center mt-2'>Discount : {item.discountPercentage}</h6>
            </div>
        </div>
        <div className='buts'>
            {item.stock > 0 ? 
            <>
            <button className='btn btn-success'>Buy Now</button> 
            <button className='btn btn-primary ms-4' onClick={handleitem}>Add to Cart</button>
            </> 
            : <button className='btn btn-outline-danger'>out of stock</button>}
        </div>
    </div>
  )
}

export default ProductList