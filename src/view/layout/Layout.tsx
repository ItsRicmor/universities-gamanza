import { Content } from './Content';
import { Header } from './Header';

import { Outlet } from "react-router-dom";



export const Layout = () => {
    return (
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}
