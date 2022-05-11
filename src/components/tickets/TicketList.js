import React, { useEffect, useState } from "react"

export const TicketList = () => {
    //What state do I want this component to render? => useState is invoked and I want Repairs to render the customers
    //Then we define a veriable (customers) to hold the state and a variable to hold the function that modifies the state
    const [tickets, setTickets] = useState([])

    //We want data from the api so we use useEffect with a function as the first argument and an empty array as the second argument
    //In the fuction we use a fetch call to the api to get the data and on the final .then instead of directly modifying state 
    //we have to remember to invoke the fuction the useState function gave us to modify it and use that array as needed
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((ticketArray) => {
                    setTickets(ticketArray)
                })
        },
        []
    )

    return (
        <>
        {tickets.map(ticketObj => (
            <p key={`ticket--${ticketObj.id}`}>
            {ticketObj.description + " "}
            submitted by {ticketObj.customer.name + " "}
            and worked on by {ticketObj.employee.name}.</p>
        ))}
        </>
    )
}