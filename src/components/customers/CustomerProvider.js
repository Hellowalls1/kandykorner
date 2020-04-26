import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers) //use state line 13
    }

    const addCustomers = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }

    /*
        Load all locations when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [customers]) //comes from use state on 13

    return (
        <CustomerContext.Provider value={{
            customers, addCustomers //addLocations line 21
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}