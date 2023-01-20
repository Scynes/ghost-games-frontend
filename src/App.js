import NavigationBar from "./components/NavigationBar";
import Landing from "./pages/Landing";
import Join from "./pages/Game";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <NavigationBar />
            <div id="page-content-wrapper" className="flex-center flex-column">
                <Routes>
                    <Route path="/" element={< Landing />} />
                    <Route path="/join" element={< Join />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
