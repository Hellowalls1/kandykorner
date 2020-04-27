import React from 'react'
import "./locations/Locations.css"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import ProductList from './products/ProductList'
import { ProductProvider } from './products/ProductProvider'
import { ProductTypeProvider } from './products/ProductTypeProvider'
import EmployeeList from './employees/EmployeeList'
import { EmployeeProvider } from './employees/EmployeeProvider'
import "./employees/Employees.css"
import { CustomerProvider } from './customers/CustomerProvider'
import { CustomerOrderProvider} from "./customers/CustomerOrderProvider"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import OrderList from "./customers/OrderList"

export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Give your kids sugar!</small>

        <address>
            <div>Visit Us at the Boardwalk</div>
            <div>3207 Main St.</div>
        </address>

        
        
       
        <CustomerProvider>

        <CustomerOrderProvider>
          <LocationProvider>
            <ProductProvider>
              <ProductTypeProvider>
                <EmployeeProvider>
                  <OrderList />
                 <h2>Locations</h2>
                <LocationList />
                  <h2>Products</h2>
                <ProductList />
                <EmployeeList />
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                      Order:
                      </ModalHeader>
                       <ModalBody>
                      <OrderList toggle={toggle} />
                      </ModalBody>
                      </Modal>
              </EmployeeProvider>
            </ProductTypeProvider>
         </ProductProvider>
        </LocationProvider>
        </CustomerOrderProvider>
        </CustomerProvider>
         

       
       
    </>
)