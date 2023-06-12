import './App.css';
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-bar.component";
import SignIn from "./routes/sign-in/sign-in.component";


function App() {

    return (
        <Routes>
            <Route path ='/' element={<Navigation />}>
                <Route index element={<Home/>}/>
                <Route path='/signIn' element={<SignIn />}/>
            </Route>
        </Routes>

    );
}

export default App;
