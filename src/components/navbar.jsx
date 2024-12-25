import { Link } from "react-router-dom"
import logo from '../img/logo.png'

export default function Navbar() {
    return(
        <>
            <nav className="bg-white-inv flex aic jca">
                <img src={ logo } alt="logo" className="size-150" />
                <ul className="flex gap-20">
                    <Link to="/" className="nav-link opacity-7 hover-opacity-10" >Home</Link>
                    <Link to="/about" className="nav-link opacity-7 hover-opacity-10" >About</Link>
                    <Link to="/features" className="nav-link opacity-7 hover-opacity-10" >Features</Link>
                    <Link to="/marketplace" className="nav-link opacity-7 hover-opacity-10" >Marketplace</Link>
                    <Link to="/forum" className="nav-link opacity-7 hover-opacity-10" >Forum</Link>
                </ul>
            </nav>
        </>
    )
}
