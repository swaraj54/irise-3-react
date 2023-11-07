import { useState } from "react";

function Mapping() {
    const [students, setStudents] = useState(["Virat", "Rahul", "Rohit", "Surya"])
    return (
        <div>
            {students.map((name, index) => (
                <div key={index}>
                    <h1>{name}</h1>
                </div>
            ))}

        </div>
    )
}

export default Mapping;