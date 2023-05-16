import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function useParamszzzz() {
    const location = useLocation();
    console.log(location.pathname, location.state, location)
    const { id } = useParams()
    console.log(`HELLO, ${id}`)
    return <h1>hI {id} </h1>
}

export default useParamszzzz;







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


