import {Outlet, Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/mlogo.svg";
import {UserContext} from "../../contexts/user.context";
import "./navigation-bar.styles.scss";
import {useContext} from "react";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";
function Navigation() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {openState} = useContext(CartContext)
    async function signOutHandler(){
        try{
            const res = await signOutUser()
        } catch (error) {

        }

    }
    return (
        <>
            <div className="navigation-container">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="navigation-categories">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/shop">
                        CONTACT
                    </Link>
                    {
                        currentUser ?
                            (<span className='nav-link' onClick={signOutHandler}> SIGN OUT</span>)
                            :
                            (
                                <Link className="nav-link" to="/auth">
                                    SIGN IN
                                </Link>

                            )
                    }
                    <Link className="nav-link" to="" >

                        <CartIcon

                        />
                    </Link>
                </div>
                {
                openState
                    &&
                <CartDropDown />
                }
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;
