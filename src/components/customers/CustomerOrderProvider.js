import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerOrderContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerOrderProvider = (props) => {
    const [customerOrders, setCustomerOrders] = useState([])

    const getCustomerOrders = () => {
        return fetch("http://localhost:8088/customerOrders")
            .then(res => res.json())
            .then(setCustomerOrders) //use state line 13
    }

    const addCustomerOrders = customerOrder => {
        return fetch("http://localhost:8088/customerOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerOrder)
        })
            .then(getCustomerOrders)
    }

    /*
        Load all locations when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCustomerOrders()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [customerOrders]) //comes from use state on 13

    return (
        <CustomerOrderContext.Provider value={{
            customerOrders, addCustomerOrders //addLocations line 21
        }}>
            {props.children}
        </CustomerOrderContext.Provider>
    )
}