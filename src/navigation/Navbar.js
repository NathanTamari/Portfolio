import { useContext, useRef, useEffect, useState } from "react";
import RefContext from "../context/RefContext";


function Navbar() {
    const { appendPageRef, refMap } = useContext(RefContext);
    const [currentScrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        //cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const home = useRef(null);
    const projects = useRef(null);
    const about = useRef(null);
    const navbar=useRef(null)

    useEffect(() => { // to prevent infinite loop, we map the current page height onto a map in context
        //so that other components can access it
        appendPageRef("Home", home);
        appendPageRef("Projects", projects);
        appendPageRef("About", about); 
        appendPageRef("navbar", navbar.current.offsetHeight);// eslint-disable-next-line
    }, [home, projects, about]);


    const scrollToSection = (section) => {// makes sure that we always know the user's scroll position
        window.scrollTo({
            top: section.current.offsetTop - refMap.get("navbar"),
            behavior: 'smooth'
        })
    } 

    const aboutHeight = refMap.get("About-Height");
    const projectsHeight = refMap.get("Projects-Height");

    // sets default class names for tailwind that we later add on to given certain scenarios, like user hovering
    let homeClassName = "inline-block mr-4 cursor-pointer"
    let projectsClassName = "inline-block mr-4 cursor-pointer"
    let aboutClassName = "inline-block mr-4 cursor-pointer"

    if(currentScrollPosition >= projectsHeight && currentScrollPosition < aboutHeight) {
        projectsClassName += " font-bold text-black";
    } else if (currentScrollPosition >= aboutHeight) {
        aboutClassName += " font-bold text-black";
    } else {
        homeClassName += " font-bold text-black";
    }

    return <div className="bg-gray-500/30 backdrop-blur border-b-8 border-blue-800">
        <div className="flex flex-row text-white place-items-center place-content-center font-mono z-50 text-xl h-16" ref={navbar}>
            <ul>
                <li className={homeClassName} onClick={() => scrollToSection(home)}>
                    Home
                </li>
                <li className={projectsClassName} onClick={() => scrollToSection(projects)}>
                    Projects
                </li>
                <li className={aboutClassName} onClick={() => scrollToSection(about)}>
                    About
                </li>
            </ul>
        </div>
    </div>
}

export default Navbar;
