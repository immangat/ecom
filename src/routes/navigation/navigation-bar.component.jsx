import {Outlet} from "react-router-dom";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {NavigationContainer, NavLink, LogoContainer, NavLinkContainer, LogoImage} from "./navigation-bar.styles";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectCart} from "../../store/cart/cart.selector";

function Navigation() {
    const currentUser = useSelector(selectCurrentUser)
    const {openState} = useSelector(selectCart)
    async function signOutHandler(){
        try{
            await signOutUser()
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
