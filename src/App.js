import Navbar from './navigation/Navbar';
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from './pages/SkillsPage';
import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import IndividualProject from './components/IndividualProject';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';

function App() {
    return (
        <HashRouter basename='/'>
                <Routes>
                <Route path='/' element= {
                    <>
                        <div className='relative'>
                            <div className="z-50 sticky top-0 inset-0"> <Navbar /> </div>
                            <div className="-mt-20 min-w-screen border-b-[12px] border-blue-900"> <HomePage /> </div>
                            <ExperiencePage />
                            <ProjectPage />
                            <EducationPage />
                            <SkillsPage />
                            <ContactPage />
                        </div>
                    </>
                } />

                <Route path='/IndividualProject/:projectName' Component={IndividualProject} />
            </Routes>
        </HashRouter>
    )
}

export default App;