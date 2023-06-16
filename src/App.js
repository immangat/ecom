import './App.css';
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-bar.component";
import Authentication from "./routes/sign-in/authentication.component";
import Shop from "./routes/shop/shop.component";


function App() {

    return (
        <Routes>
            <Route path ='/' element={<Navigation />}>
                <Route index element={<Home/>}/>
                <Route path='/auth' element={<Authentication />}/>
                <Route path='shop' element={<Shop/>}/>
            </Route>
        </Routes>

    );
}

export default App;
