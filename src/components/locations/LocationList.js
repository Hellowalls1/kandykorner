import React, { useContext } from "react"
import "./Locations.css"
import { LocationContext } from "./LocationProvider" //importing context object from Provider
import Location from "./Location"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of locations and generate HTML for each one by invoking the Location component function */
    const { locations } = useContext(LocationContext) //array of customers from the data provider

    return (
        <div className="locations">

        {
            locations.map(loc => <Location key={loc.id} location={loc} />) 
        }
        </div>
    )
}