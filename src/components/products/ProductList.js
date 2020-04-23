import React, { useContext } from "react"
import "./Products.css"
import { ProductContext } from "./ProductProvider" //importing context object from Provider
import { ProductTypeContext } from "./ProductTypeProvider"

import Product from "./Product"

export default () => {

    //Brings in Array of products/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of products and generate HTML for each one by invoking the product component function */
    const { products } = useContext(ProductContext) //array of products from the data provider
    const { productTypes } = useContext(ProductTypeContext)
   
    return (
        <div className="products">

        {
            products.map(product => {

            const candyType = productTypes.find(pType => pType.id === product.productTypeId) //products is the array of products coming from the useContext hook
       
            return <Product key={product.id}
            product={product} 
            productType={candyType} />
        })
        }    
        </div>
    
)}