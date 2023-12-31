import React, { useEffect, useState } from 'react'
import { items } from '../../Data';
import { useParams } from 'react-router-dom'
import Product from './Product';

const SearchResult = () => {

        const {product} = useParams();

        const [searchProduct, setSearchProduct] = useState([]);

        useEffect(()=>{
                const data = items.filter((p) => p.title.toLowerCase().includes(product.toLowerCase()))
                setSearchProduct(data);
        },[product])
        

  return (
    <div>
            <Product items={searchProduct}/>
    </div>
  )
}

export default SearchResult
