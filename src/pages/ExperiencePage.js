import { useContext, useEffect } from "react";
import RefContext from "../context/RefContext";
import AOS from "aos";
import AXALogo from '../pics/Logos/AXALogo.png';

function ExperiencePage() {
    AOS.init();
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Experience");
    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Experience-Height", valueForRef.current.offsetTop)
        } // eslint-disable-next-line
    }, [valueForRef])

        return (
            <div ref={valueForRef} className="bg-cream flex flex-col items-center justify-center">
                    <div className="font-bold top-0 w-full bg-cream text-center lg:text-3xl md:text-2xl sm:text-xl lg:pt-20 sm:pt-8" data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-cubic">
                        <h1>Experience</h1>
                    </div>
                <div className= "relative flex justify-center items-center min-h-96 min-w-96 max-h-min bg-gray-300 m-24 rounded-3xl" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                    <img src={AXALogo} alt="AXA logo" className="max-h-48 left-0 m-6"/>
                    <div className="flex-col m-6 lg:text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        <h1 className=" top-0 font-bold lg:text-xl">AXA XL - Global Technology Intern</h1>
                        <h3 className="text-xl italic">June 2024 - August 2024</h3>
                        <div className="text-xs sm:text-sm md:text-md lg:text-lg">
                            <h5>Interned at AXA XL as a Global Technology Intern within the Ops & Tech team. Primarily worked with Azure Databricks and their cloud database. </h5>
                            <li>Learned and implemented Azure Databricks for data migration.</li>
                            <li>Assisted in the seamless transition of on-premises data to Azure cloud infrastructure.</li>
                            <li>Collaborated with team members to ensure key client data in the database was up to date and accurate.</li>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default ExperiencePage;