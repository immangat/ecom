import styled from 'styled-components'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/mlogo.svg";
export const NavigationContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`
export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
export const LogoImage = styled(Logo)`
  max-height: 70px;
`