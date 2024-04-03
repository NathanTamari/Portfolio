import Navbar from './navigation/Navbar';
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import IndividualProject from './components/IndividualProject';

function App() {
    return (    
        <Router>
            <Routes>
                    <Route exact path='/Portfolio' element={
                        <div className="relative">
                            <div className="z-50 sticky top-0 inset-0"> <Navbar /> </div>
                            <div className="-mt-20"> <HomePage /> </div>
                            <ProjectPage />
                            <AboutPage />
                        </div>
                    } />

                    <Route path='/IndividualProject/:projectName' element={
                        <div>
                            <IndividualProject />
                        </div>
                    } />
                </Routes>
        </Router>
    )
}

export default App;