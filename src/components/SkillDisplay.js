import { useState } from "react";

function SkillDisplay({ png }) {

    let classNameImg = "p-4 w-20 sm:p-1 md:p-2 lg:p-6 sm:w-28 md:w-32 lg:w-40 xl:w-48"
    const [hovering, changeHovering] = useState(false)
    const handleHoverChange = () => {
        changeHovering(!hovering);
    }
    if (hovering) {
        classNameImg = "w-16 sm:w-28 md:w-32 lg:w-40 xl:w-48"
    }

    return (
        <div onMouseEnter={handleHoverChange} onMouseLeave={handleHoverChange}>
            <img src={png} className={classNameImg} alt="Skill Logo"/>
        </div>
    );
}

export default SkillDisplay;