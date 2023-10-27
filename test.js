import { useState } from "react";

var number = 12;
console.log(number) // 12
number = 87 // re - assign
number++; // 88
number--; // 87
console.log(number) //  87


const [irise, setIrise] = useState(12);

// irise = 12
console.log(irise) // 12
setIrise(87)
console.log(irise) // 87