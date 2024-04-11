import Navbar from './navigation/Navbar';
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from './pages/SkillsPage';
import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import IndividualProject from './components/IndividualProject';
import ContactPage from './pages/ContactPage';

function App() {

    return (
        <HashRouter basename='/'>
                <Routes>
                <Route path='/' element= {
                    <>
                        <div className='relative'>
                            <div className="z-50 sticky top-0 inset-0"> <Navbar /> </div>
                            <div className="-mt-20 min-w-screen border-b-8  border-black"> <HomePage /> </div>
                            <ProjectPage />
                            <AboutPage />
                            <div className='border-b-8 border-black'>
                                <SkillsPage />
                            </div>
                            <div className='p-64'>
                                <ContactPage />
                            </div>
                        </div>
                    </>
                } />

                <Route path='/IndividualProject/:projectName' Component={IndividualProject} />
            </Routes>
        </HashRouter>
    )
}

export default App;