import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/mlogo.svg";
import "./navigation-bar.styles.scss";

function Navigation() {
    return (
        <>
            <div className="navigation-container">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="navigation-categories">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/shop">
                        CONTACT
                    </Link>
                    <Link className="nav-link" to="/signIn">
                        SIGN IN
                    </Link>
                    <Link className="nav-link" to="/shop">
                        CART
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
