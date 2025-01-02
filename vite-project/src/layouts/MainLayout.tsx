import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

function MainLayout(){

    return (
        <>  
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default MainLayout