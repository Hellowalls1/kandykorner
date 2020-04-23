import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ProductTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes) //use state line 13
    }

    const addProductTypes = product => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypes)
        })
            .then(getProductTypes) //once you add a new one relist all with the fetch
    }

    /*
        Load all productTypes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getProductTypes()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [productTypes]) //comes from use state on 13

    return (
        <ProductTypeContext.Provider value={{
            productTypes, addProductTypes //addProducts line 21
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}