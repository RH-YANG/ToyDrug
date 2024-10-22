import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gate from './pages/gate/Gate';
import Login from './pages/login/Login';



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gate />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
