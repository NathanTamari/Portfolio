import { useState, useContext } from "react";
import RefContext from "../context/RefContext";
import BarGraph from "./BarGraph";

function ProjectDisplay({ projectGif, name, description, languages}) {
    const { refMap } = useContext(RefContext);
    const valueForRef = refMap.get("Project");
    const [hovering, changeHovering] = useState(false);
    const handleHoverChange = () => {
        changeHovering(!hovering);
    }
    
    languages.sort(function(a,b) {return b.p-a.p}); // sorts the array of information highest to lowest % content

    const textClassAll = "absolute top-0 items-center h-full w-full flex p-1 flex-col xl:p-8";
    let textClassName = textClassAll + " text-darkest-blue font-bold justify-start sm:text-xl md:text-xl";
    let textClassDescription = textClassAll + " text-cream text-sm font-semi-bold top-0 justify-center md:px-16 md:text-lg";
    let textClassBarGraph = textClassAll + " justify-end pb-2 md:p-16";
    let textClassBG = "";
    
    if(hovering) {
        textClassName += " backdrop-blur-sm";
        textClassBG += " brightness-75 rounded";
    }

    const handleClick = () => { // opens window in a new tab
        window.open(`/IndividualProject/${name}`, '_blank');
    }

    return (
        <div className="relative"
        onMouseEnter={handleHoverChange}
        onMouseLeave={handleHoverChange}
        onClick={handleClick}
        ref={valueForRef}
        > 
            <img src={projectGif} alt="GIF of project" className={textClassBG} />
            <h2 className= {textClassName}>{hovering && name}</h2>
            <p className={textClassDescription}> {hovering && description} </p>

            <div className={textClassBarGraph}>
                {hovering && 
                <BarGraph languages={languages} />
                }
            </div>

        </div>
    );
}

export default ProjectDisplay;