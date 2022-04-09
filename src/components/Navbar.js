import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Transaction from "../pages/Transaction";
import MostConversion from "../pages/MostConversion";
import AllUsersConversion from "../pages/AllUsersConversion";
import ThirdHighestConversion from "../pages/ThirdHighestConversion";

const Navbar = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Transaction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/most-conversion">Most conversion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all-users-conversion">All users conversion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/third-highest-conversion">Third highest conversion
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" exact element={<Transaction />}/>
                <Route path="/most-conversion" exact element={<MostConversion />}/>
                <Route path="/all-users-conversion" exact element={<AllUsersConversion />}/>
                <Route path="/third-highest-conversion" exact element={<ThirdHighestConversion />}/>
            </Routes>
        </Router>
    )
}

export default Navbar