import React, { ReactNode } from 'react'
import { Header } from '../components'


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />

                <main >{children}</main>

            {/* <Footer /> */}
        </>
    )
};


export default Layout