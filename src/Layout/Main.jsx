import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Components/shareds/Headers';
import Footer from '../Components/shareds/Footer';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;