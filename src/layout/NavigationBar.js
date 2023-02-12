import { Link } from "react-router-dom";

function NavigationBar(){
    return(
        
        

        <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <Link to="/" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary">
                    <i className="fa-solid fa-scale-balanced"></i>Lawyer Landing</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        
                        <Link to="/contract" className="nav-item nav-link"> Contract </Link>                        
                        

                    </div>
                </div>
            </nav>
        </div>
    </div>


    );
}
export default NavigationBar;