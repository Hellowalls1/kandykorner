import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../locations/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody, } from "reactstrap"
import EmployeeForm from "./EmployeeForm"


export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
  
    //modal is the name of the state that is being addressed
    //set Modal is the function that toogles the state of the modal as true or false
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Employees</h2>

            {/* when the user clicks on the newEmployee div the toggle function runs which in turn 
            invokes the toggle function on line 16 which makese the modal appear
            Which in turn invokes isOpen={modal} to toggle from false to true */}

            <Button onClick={toggle}>New Employee</Button>

            <ul className="employees">
                {
                    employees.map(employee => {
                        const loc = locations.find(l => l.id === employee.locationId)

                        return <Employee key={employee.id} location={loc} employee={employee} />
                    })
                }
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}