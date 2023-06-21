import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MenuPages from "../components/MenuPages.js";
import { handHelds } from '../data/menuData/handHelds.js';
import { largePlates } from '../data/menuData/largePlates.js';


function UseParamszzzz() {
    const location = useLocation();
    const { menuCategory } = useParams();
    return (
        <>
            <h1>fROM PARAMSZZ{menuCategory}</h1>
            <MenuPages menuData={largePlates} dataTitle={location.state} titleDescription={'100% USDA CHOICE BEEF'} />
        </>
    );

}

export default UseParamszzzz;
