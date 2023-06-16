import './App.css';
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-bar.component";
import Authentication from "./routes/sign-in/authentication.component";


function App() {

    return (
        <Routes>
            <Route path ='/' element={<Navigation />}>
                <Route index element={<Home/>}/>
                <Route path='/auth' element={<Authentication />}/>
            </Route>
        </Routes>

    );
}

export default App;
