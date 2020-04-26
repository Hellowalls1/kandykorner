import React, {useContext} from "react"
import { ProductContext } from "./ProductProvider"
import { CustomerOrderContext } from "../customers/CustomerOrderProvider"

export default ({product, productType}) => {
    
   
        //pulling in products and POST call for use
        

    //actually don't  need to pull in the products because the value of products will come through the function in ProductList
    const { products } = useContext(ProductContext)
    const { addCustomerOrders } = useContext(CustomerOrderContext)

    //function that creates new object to be Posted to the CustomOrderProvider
    const constructNewOrder = () => {
        
        //customerId is from Local storage must be parsed along with savedProductId
        const savedCustomerId = parseInt(localStorage.getItem("kandy_customer"))
        const savedProductId = (product.id)
       
        
        const customerOrderObject = { 
            customerId: savedCustomerId,
            productId: savedProductId
        }
        addCustomerOrders(customerOrderObject)
    }
    return (
        
        <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__address">{productType.name}</div>
        <button type="submit"
onClick={
    evt => {
        evt.preventDefault()
        constructNewOrder()
    }
}
className="btn btn-primary">
Add Candy
</button>
    </section>
    
    )
    
    
}