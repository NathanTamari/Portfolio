import Navbar from './navigation/Navbar';
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import "./index.css";

function App() {
    return (
        <div className="relative">
            <div className="z-50 sticky top-0 inset-0">
                <Navbar />
            </div>
            <div className="-mt-24">
                <HomePage />
            </div>
            <ProjectPage />
            <AboutPage />;
        </div>
    )
}

export default App;