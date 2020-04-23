import React, { useContext } from "react"
import "./Products.css"
import { ProductContext } from "./ProductProvider" //importing context object from Provider
import Product from "./Product"

export default () => {

    //Brings in Array of products/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of products and generate HTML for each one by invoking the product component function */
    const { products } = useContext(ProductContext) //array of products from the data provider

    return (
        <div className="products">

        {
            products.map(prod => <Product key={prod.id} product={prod} />)  //products is the array of products coming from the useContext hook
        }
        </div>
    )
}