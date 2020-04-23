import React from 'react'
import "./locations/Locations.css"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import ProductList from './products/ProductList'
import { ProductProvider } from './products/ProductProvider'
import { ProductTypeProvider } from './products/ProductTypeProvider'

export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Give your kids sugar!</small>

        <address>
            <div>Visit Us at the Boardwalk</div>
            <div>3207 Main St.</div>
        </address>

        
        <h2>Locations</h2>
        
        <LocationProvider>
            <LocationList />
        </LocationProvider>
       
       <h2>Products</h2>

         <ProductProvider>
            <ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
         </ProductProvider>

       
       
    </>
)