import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MenuPages from "./MenuPages.js";
import { handHelds } from '../data/menuData/handHelds.js';
import { largePlates } from '../data/menuData/largePlates.js';


function UseParamszzzz() {
    const location = useLocation();
    console.log(location.pathname, location.state, location)
    const { menuCategory } = useParams();
    console.log(`HELLO, ${menuCategory}`)
    return (
        <>
            <h1>ID: {menuCategory}</h1>
            <MenuPages menuData={handHelds} dataTitle={location.state} titleDescription={'100% USDA CHOICE BEEF'} />
        </>
    );

}

export default UseParamszzzz;







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


