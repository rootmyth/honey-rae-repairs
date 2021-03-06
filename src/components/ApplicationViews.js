import React from "react"
import { Route } from "react-router-dom"
import  { CustomerList } from "./customers/CustomerList"
import  { EmployeeList } from "./employees/EmployeeList"
import  { TicketList } from "./tickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers"><CustomerList /></Route>
            <Route path="/employees"><EmployeeList /></Route>
            <Route path="/tickets"><TicketList /></Route>
        </>
    )
}