import React, { useContext } from 'react';
import ProductContext from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductGrid = () => {
    const { products } = useContext(ProductContext);
    console.log(products.catImg )
    const navigate = useNavigate();

    const viewCart=(product)=>{
        console.log(product)
        
        navigate(`/view-cart?name=${products.productName}`, { state: product });

    }

    return (
       <>
       <div>
       <div className='product-card'>
        {/* <img stc></img> */}
        <img src={products.catImg} className='product-info-img'></img>
       <div>{products.productName}</div>
       <div>{products.price}</div>
       <button class="btn btn-primary" onClick={()=>viewCart(products)}>Add to cart</button>
       </div>
       </div>
       </>
    );
};

export default ProductGrid;
