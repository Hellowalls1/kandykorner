import React from "react" 
import  { Table } from "reactstrap"

export default ({ products, customerOrders }) => {

    //finding the order that matches the currentUser
    const currentMatchingOrder = customerOrders.filter(ord => {
        return ord.customerId === parseInt(localStorage.getItem("kandy_customer"))
     })

     //an array of products the customer ordered
     const customerOrder = currentMatchingOrder.map(ord => {
        return  products.find(p => p.id === ord.productId)
     })
     
     return (
        <Table>
        <thead>
            <tr>
                <th>Candy</th>
                <th>Total Cost</th>
            </tr>
        </thead>
        <tbody>
            {
                customerOrder.map(order =>{
                    return (
                        <tr>
                            <td>{order.name}</td>
                            <td>${order.price}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table>
     )
}

