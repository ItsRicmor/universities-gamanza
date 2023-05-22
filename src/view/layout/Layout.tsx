import { Content } from './Content';
import { Header } from './header/Header';

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
