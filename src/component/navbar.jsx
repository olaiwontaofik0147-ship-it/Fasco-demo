import { Link } from "react-router";

function NavBar () {
    return (
        < nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-5">
            <Link className="navbar-brand fw-bold" to="/"><img src="/images/FASCO.png" alt="man" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><a className="nav-link" href="#deals">Deals</a></li>
                    <li className="nav-item"><a className="nav-link" href="#NewArrivals">New Arrival</a></li>
                    <li className="nav-item"><Link className="nav-link" to="/shopPage">Packages</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/signIn">Sign in</Link></li>
                    <li className="nav-item"><Link className="btn btn-dark ms-2" to="/signUp">Sign Up</Link></li>
                </ul>
            </div>
        </nav >
    )
}
export default NavBar