import './App.css';
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-bar.component";
import Authentication from "./routes/sign-in/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/check-out/check-out.component";
import {useEffect} from "react";
import {checkUserSession} from "./store/user/user.action";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkUserSession())
    }, [])


    return (
        <Routes>
            <Route path ='/' element={<Navigation />}>
                <Route index element={<Home />}/>
                <Route path='/auth' element={<Authentication />}/>
                <Route path='shop/*' element={<Shop />}/>
                <Route path= 'checkout' element={<CheckOut />}/>
            </Route>
        </Routes>

    );
}

export default App;
