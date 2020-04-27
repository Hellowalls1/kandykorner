import React, { useContext, useState} from "react"
import { CustomerOrderContext } from "./CustomerOrderProvider"
import { CustomerContext } from "./CustomerProvider"
import { ProductContext } from "../products/ProductProvider"
 import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import CustomerOrder from "./CustomerOrder"

// 1. On button click checking to see if the user is authenticated
//   2. If the userId not undefined then toggle the modal that shows the order
//   3. The modal brings in the order representation from CustomerOrder.js which is toggled

export default () => {

  //All the data that is needed
    const { customers } = useContext(CustomerContext)
    const { products } = useContext(ProductContext)
    const { customerOrders } = useContext (CustomerOrderContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
     <Button onClick={() => {
         //check if the user is authenticated
         //define current user
         const userId = parseInt(localStorage.getItem("kandy_customer")) //where does kandy customer come from
        if (userId !== undefined){ 
            //if the user is authenticated, show the animal form
            toggle() //function that sets the modal state to the opposite on line 20
        }
    }}>My Order</Button>
    
    
    <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Candy Order
                </ModalHeader>
                <ModalBody>
                    <CustomerOrder 
                    products={products} //variables on left are what are called into the CustomerOrder.js
                    customers={customers} 
                    customerOrders={customerOrders} toggle={toggle} /> 
                </ModalBody>
            </Modal>
     </>
)
}

