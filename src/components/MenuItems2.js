import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


export function MenuItems2() {
    // const location = useLocation();
    console.log(location)
    const { id } = useParams()
    return <h1>hI {id} </h1>
}









// <Route 
// path="/tests/:id/index.html"
// element={
//   <>
//     <MenuItems2 />
//   </>
// }
// />
// {/* <Route path="*" element={<NotFound404 />} */}



// <Route path="/menu">
//   {/* This one will match the parent route (/menu/:id) extacly */}
//   <Route index element={<MenuItems2 />} />
//   <Route path=":id" element={<MenuItems2 />} />
// </Route>


