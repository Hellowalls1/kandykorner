import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../locations/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import EmployeeForm from "./EmployeeForm"


export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
  
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Employees</h2>

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