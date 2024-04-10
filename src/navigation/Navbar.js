import { useContext, useRef, useEffect, useState } from "react";
import RefContext from "../context/RefContext";


function Navbar() {
    const { appendPageRef, refMap } = useContext(RefContext);
    const [currentScrollPosition, setScrollPosition] = useState(0);

    // handles when a tab is clicked and we want to scroll there
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
    const skills = useRef(null);
    const contact = useRef(null);
    const navbar = useRef(null);
    

    useEffect(() => { // to prevent infinite loop, we map the current page height onto a map in context
        //so that other components can access it
        appendPageRef("Home", home);
        appendPageRef("Projects", projects);
        appendPageRef("About", about); 
        appendPageRef("Skills", skills);
        appendPageRef("Contact", contact)
        appendPageRef("navbar", navbar.current.offsetHeight);// eslint-disable-next-line
    }, [home, projects, about, skills, contact]);


    const scrollToSection = (section) => {// makes sure that we always know the user's scroll position
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: 'smooth'
        })
    } 

    // retreives the height at which each tab is stored at
    const aboutHeight = refMap.get("About-Height");
    const projectsHeight = refMap.get("Projects-Height");
    const skillsHeight = refMap.get("Skills-Height");
    const contactHeight = refMap.get("Contact-Height");

    // sets default class names for tailwind that we later add on to given certain scenarios, like user hovering
    let homeClassName = "inline-block mr-4 cursor-pointer"
    let projectsClassName = "inline-block mr-4 cursor-pointer"
    let aboutClassName = "inline-block mr-4 cursor-pointer"
    let skillsClassName = "inline-block mr-4 cursor-pointer"
    let contactClassName = "inline-block mr-4 cursor-pointer"

    // sets the current selected tab to have its title in the navbar bolded
    if(currentScrollPosition >= contactHeight) {
        contactClassName += " font-bold text-black"
    }
    else if(currentScrollPosition >= skillsHeight && currentScrollPosition < contactHeight) {
        skillsClassName += " font-bold text-black"
    }
    else if(currentScrollPosition >= projectsHeight && currentScrollPosition < aboutHeight) {
        projectsClassName += " font-bold text-black";
    } else if (currentScrollPosition >= aboutHeight && currentScrollPosition < skillsHeight) {
        aboutClassName += " font-bold text-black";
    } else {
        homeClassName += " font-bold text-black";
    }

    return <div className="bg-gray-500/30 backdrop-blur border-b-8 border-blue-800">
        <div className="flex flex-row text-white place-items-center place-content-center font-mono z-50 text-xl h-16 " ref={navbar}>
            <ul>
                <li className={homeClassName} onClick={() => scrollToSection(home)}>Home</li>
                <li className={projectsClassName} onClick={() => scrollToSection(projects)}>Projects</li>
                <li className={aboutClassName} onClick={() => scrollToSection(about)}>About</li>
                <li className={skillsClassName} onClick={() => scrollToSection(skills)}>Skills</li>
                <li className={contactClassName} onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
        </div>
    </div>
}

export default Navbar;
