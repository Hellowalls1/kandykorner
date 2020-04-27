import React, { useContext, useState} from "react"
import { CustomerOrderContext } from "./CustomerOrderProvider"
import { CustomerContext } from "CustomerProvider.js"
import { ProductContext } from "../products/ProductProvider"
 import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"


export default () => {

    const { customers } = useContext(CustomerContext)
    const { products } = useContext(ProductContext)
    const { orders } = useContext (CustomerOrderContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
     <Button onClick={() => {
         //check if the user is authenticated
         const userId = localStorage.getItem("kandy_customer") //where does kandy customer come from
        if (userId){
            //if the user is authenticated, show the animal form
            toggle() //function that sets the modal state to the opposite on line 20
        }
    }}>My Order</Button>
     <div className="orders">
    {
        orders.map(ord => {
            const matchingCandyInfo = products.find(p => p.id === ord.productId)
        
        return <CustomerOrder key={ord.id}

        candy={matchingCandyInfo}
        
        order={ord} 
  
        />
    })
}
    </div>    
    </>
)
}
    
      
