import {Outlet, Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/mlogo.svg";
import {UserContext} from "../../contexts/user.context";
import {useContext} from "react";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";
import {NavigationContainer, NavLink, LogoContainer, NavLinkContainer, LogoImage} from "./navigation-bar.styles";

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
            <NavigationContainer>
                <LogoContainer to="/">
                    <LogoImage/>
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink className="nav-link" to="/shop">
                        SHOP
                    </NavLink>
                    <NavLink className="nav-link" to="/shop">
                        CONTACT
                    </NavLink>
                    {
                        currentUser ?
                            (<NavLink as='span' onClick={signOutHandler}> SIGN OUT</NavLink>)
                            :
                            (
                                <NavLink className="nav-link" to="/auth">
                                    SIGN IN
                                </NavLink>

                            )
                    }
                    <div className="nav-link" >

                        <CartIcon

                        />
                    </div>
                </NavLinkContainer>
                {
                openState
                    &&
                <CartDropDown />
                }
            </NavigationContainer>
            <Outlet/>
        </>
    );
}

export default Navigation;
