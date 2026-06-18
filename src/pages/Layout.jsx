import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Nav from "../components/nav/Nav"

const Layout = () => {
    return(
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout