import { useContext, useEffect } from "react";
import RefContext from '../context/RefContext';
import AOS from 'aos';
import javaimg from "../pics/Logos/javapng.png";
import Cimg from "../pics/Logos/Clogo.png";
import pythonimg from "../pics/Logos/pythonimg.png";
import reactimg from "../pics/Logos/reactpng.png";
import databricksimg from "../pics/Logos/databrickspng.png";
import sqlimg from "../pics/Logos/sqlpng.png";
import SkillDisplay from "../components/SkillDisplay";

function SkillsPage() {
    AOS.init();
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Skills");
    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Skills-Height", valueForRef.current.offsetTop);
        } // eslint-disable-next-line
    }, [valueForRef])

    return (
        <div ref={valueForRef} className="bg-cream flex flex-col items-center justify-center">
            <div className="top-0 w-full bg-cream text-center lg:text-3xl md:text-2xl sm:text-xl lg:pt-20 sm:pt-8" data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-cubic">
                <h1 className="font-bold">Skills</h1>
            </div>
                <div className= "relative flex justify-center items-center min-h-96 min-w-96 max-h-min bg-blue-200 m-24 rounded-3xl" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                    <div className="flex-col m-6 lg:text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        <div className='top-0 gap-12 pt-8 p-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 z-10'>
                            <SkillDisplay png={javaimg}/>
                            <SkillDisplay png={Cimg}/>
                            <SkillDisplay png={pythonimg}/>
                            <SkillDisplay png={reactimg}/>
                            <SkillDisplay png={databricksimg} />
                            <SkillDisplay png={sqlimg} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default SkillsPage;


