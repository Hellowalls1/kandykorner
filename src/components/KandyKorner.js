import React from 'react'
import "./locations/Locations.css"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

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
       

       
       
    </>
)