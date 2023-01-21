import NavigationBar from "./components/NavigationBar";
import Landing from "./pages/Landing";
import Join from "./pages/Game";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <NavigationBar />
            <div id="page-content-wrapper" className="flex-center flex-column">
                <Routes>
                    <Route path="/" element={< Landing />} />
                    <Route path="/join" element={< Join />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
