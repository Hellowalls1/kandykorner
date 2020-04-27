import React from "react"

export default ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__locationId">{employee.locationId}</div>
        <div className="employee__manager">Manager: {employee.manager ? "true" : "false"}</div>
        <div className="employee__fullTime">Fulltime: {employee.fullTime ? "true" : "false"}</div>
        <div className="employee__hourlyRate">${employee.hourlyRate}</div>
    </section>
)

