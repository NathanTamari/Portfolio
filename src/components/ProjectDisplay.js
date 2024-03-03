import { useState, useContext } from "react";
import RefContext from "../context/RefContext";

function ProjectDisplay({
    projectGif,
    name, 
    description, 
    languages,
    link
}) {
    const { refMap } = useContext(RefContext);
    const valueForRef = refMap.get("Project");
    console.log(refMap.get("navbar"));
    const [hovering, changeHovering] = useState(false);
    const handleHoverChange = (event) => {
        changeHovering(!hovering);
    }

        const textClassAll = "absolute top-0 items-center h-full w-full flex p-8 flex-col";
        let textClassName = textClassAll + " text-darkest-blue text-2xl font-bold";
        let textClassDescription = textClassAll + " text-cream text-sm font-semi-bold pb-24 justify-end";

    let textClassBG = "";
    if(hovering) {
        textClassName += " backdrop-blur-sm";
        textClassBG += " brightness-75";
    }

    return (
        <div className="relative"
        onMouseEnter={handleHoverChange}
        onMouseLeave={handleHoverChange}
        ref={valueForRef}
        > 
            <img 
                src={projectGif} 
                alt="joe"
                className={textClassBG}
            />

            <h2 className= {textClassName}> 
                {hovering && name}
            </h2>


            <p className={textClassDescription}>
                {hovering && description}
            </p>
        </div>
    );
}

export default ProjectDisplay;