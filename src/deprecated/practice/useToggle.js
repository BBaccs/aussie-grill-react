// import React, { useState } from 'react';

// // set initial val to false by default if no otehr value is set
// function useToggle(initialVal = false) {
//     //call useState, "reserve piece of state"
//     // the names state and setState are confusing because they are also special 
//     // keywords in react these are NOT those keywords, they coulda been called anything...
//     const [state, setState] = useState(initialVal);
//     const toggle = () => {
//         setState(!state);
//     };
//     //return piece fo state AND a function to toggle it (instead of returning setState)
//     return [ state, toggle ];
// }

// export default useToggle;

// // It's conventional to name your hooks with "use" at the beginning