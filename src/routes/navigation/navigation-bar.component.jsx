import {Outlet} from "react-router-dom";import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {NavigationContainer, NavLink, LogoContainer, NavLinkContainer, LogoImage} from "./navigation-bar.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectCart} from "../../store/cart/cart.selector";
import {signOutAction} from "../../store/user/user.action";

function Navigation() {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const {openState} = useSelector(selectCart)
    async function signOutHandler(){
        try{
            dispatch(signOutAction())
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
