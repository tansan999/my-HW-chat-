// import React from "react";
// import { useState } from "react";
// 
// export default function Write() {
//   const [text, sattext] = useState("");
//   const [todo, setodo] = useState([]);
//   console.log("todo: ", todo);
// 
//   const хранилище_для_данных_inputa = () => {
//     const dateInputValue = {
//       title: text,
//       date: new Date().toLocaleTimeString(),
//       id: crypto.randomUUID,
//     };
// 
//     setodo([...todo, dateInputValue]);
//     sattext("");
//   };
// 
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="нууу тут надо писать..."
//         onChange={(ell) => {
//           sattext(ell.target.value);
//         }}
//         value={text}
//         //взлли контент с инпута
//       />
// 
//       <button onClick={хранилище_для_данных_inputa}>click me</button>
// 
//       <ul>
//         {todo.map((elem) => (
//           <li key={elem.id}>
//             {" "}
//             {elem.title} {elem.date}{" "}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
