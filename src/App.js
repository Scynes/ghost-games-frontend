import Landing from "./pages/Landing";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={< Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
