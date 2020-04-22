import React from "react"

export default ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__SquareFeet">{location.squareFeet}</div>
        <div className="location__Handicap">{location.handicap}</div>
    </section>
)