import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employees.css"

export default props => {
    const { addEmployees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)


    // useRef() is getting it's value from the ref={} in the input field (value of input into the form)
    // it is then getting stored into a new variable lines 14-19
    // then the variable is getting called in the addEmployee() function so that a value can be passed into the api

    //reference to each input field in the form 
    const name = useRef()
    const location = useRef()
    const manager = useRef()
    const fullTime = useRef()
    const rate = useRef()

    //parseInt because everything must becaues data from the DOM is in a string and must be converted to a integer
    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value) 
        const hourlyRate = parseInt(rate.current.value)
        //locationId === 0 is the "choose" message that is displaying 
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {

            //function that makes the object of the employee that is sent to the data provider
            //addEmployee is the defined variable to represent the POST function in the employee data provider 
            //these can't be used unless there is a reference established

            addEmployees({
                name: name.current.value,
                locationId: locationId, //lcationId and hourlyRate are redifined because they need to be parsed to be submitted since everything coming off the DOM is a string
                manager: manager.current.checked,
                fullTime: fullTime.current.checked,
                hourlyRate: hourlyRate 
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeLocation">Employee location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        {/* mapping over the locations and converting each location into an option 
                        element with the {e.name} as the text that appears and the {e.id} as the value of the 
                        option */}

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}> 
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeManager">Select if Employee is Management: </label>
                    <input
                        type="checkbox"
                        id="employeeManager"
                        ref={manager}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Are you management?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Select if Employee is F/T: </label>
                    <input
                        type="checkbox"
                        id="employeeName"
                        ref={fullTime}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Are you F/T?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeRate">Hourly Rate: </label>
                    <input
                        type="text"
                        id="employeeRate"
                        ref={rate}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee Rate"
                    />
                </div>
            </fieldset>




            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee() //rather than submit the form please construct a new employee on line 23 when the user clicks on submit button
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}