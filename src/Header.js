import React, {Component} from "react"

class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
                <a className="navbar-brand" href="#nogo">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nogonavbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#nogo">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nogo">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nogo">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#nogo" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#nogo">Action</a>
                        <a className="dropdown-item" href="#nogo">Another action</a>
                        <a className="dropdown-item" href="#nogo">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}
export default Header;