import { useState } from "react";

function MappingTwo() {
    const [studentsData, setStudentsData] = useState([{ name: "Rahul", age: 25, role: "Batsman" }, { name: "Rohit", age: 30, role: "Batsman" }, { name: "Virat", age: 30, role: "All rounder" }])
    console.log(studentsData, "studentsData")
    return (
        <div>
            <h1>Players List</h1>
            {studentsData.map((i) => (
                <div>
                    <h1>Name : {i.name}</h1>
                    <h2>Age : {i.age}</h2>
                    <h2>Role : {i.role}</h2>
                </div>
            ))}
        </div>
    )
}

export default MappingTwo;