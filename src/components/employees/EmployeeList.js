import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    //What state do I want this component to render? => useState is invoked and I want Repairs to render the customers
    //Then we define a veriable (customers) to hold the state and a variable to hold the function that modifies the state
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecialty] = useState("")

    //We want data from the api so we use useEffect with a function as the first argument and an empty array as the second argument
    //In the fuction we use a fetch call to the api to get the data and on the final .then instead of directly modifying state 
    //we have to remember to invoke the fuction the useState function gave us to modify it and use that array as needed
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const justSpecialties = (employees.map(employeeObj => employeeObj.specialty))
            setSpecialty(justSpecialties.join(", "))
        },
        [employees]
    )

    return (
        <>
        <div>Specialties: {specialties}</div>
        {employees.map(employeeObj => <p key={`employee--${employeeObj.id}`}>{employeeObj.name}</p>)}
        </>
    )
}