import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    //What state do I want this component to render? => useState is invoked and I want Repairs to render the customers
    //Then we define a veriable (customers) to hold the state and a variable to hold the function that modifies the state
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateTotalMessage] = useState("")
    const [restOfCustomersMessage, updateRestOfMessage] = useState("")

    //We want data from the api so we use useEffect with a function as the first argument and an empty array as the second argument
    //In the fuction we use a fetch call to the api to get the data and on the final .then instead of directly modifying state 
    //we have to remember to invoke the fuction the useState function gave us to modify it and use that array as needed
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateTotalMessage("You have 1 customer")
            } else {
                updateTotalMessage(`You have ${customers.length} customers`)
            }
            updateRestOfMessage(`And ${customers.length - 5} more customers`)
        },
        [customers]
    )

    return (
        <>
        <div>{totalCustomerMessage}</div>
        {customers.slice(0, 5).map(customerObj => <p key={`customer--${customerObj.id}`}>{customerObj.name}</p>)}
        <div>{restOfCustomersMessage}</div>
        </>
    )
}