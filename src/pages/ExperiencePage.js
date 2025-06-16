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
                <div className= "relative flex justify-center items-center min-h-96 min-w-96 max-h-min bg-blue-300 m-24 rounded-3xl" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                    <img src={AXALogo} alt="AXA logo" className="max-h-48 left-0 m-6"/>
                    <div className="flex-col m-6 lg:text-lg relative space-y-10" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                    {/* vertical line */}
                
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 " ></div>
                    <div className="absolute left-3 top-1 w-2.5 h-2.5 bg-gray-500 rounded-full z-10"></div>

                        <div className="relative pl-10">
                            <h1 className=" top-0 font-bold lg:text-xl">Global Technology Intern</h1>
                            <h3 className="text-xl italic">June 2024 - August 2024 | Stamford, CT</h3>
                            <div className="text-xs sm:text-sm md:text-md lg:text-lg">
                                <h5>Interned at AXA XL as a Global Technology Intern within the Ops & Tech team. Primarily worked with Azure Databricks and their cloud database. </h5>
                                <li>Learned and implemented Azure Databricks for data migration.</li>
                                <li>Assisted in the seamless transition of on-premises data to Azure cloud infrastructure.</li>
                                <li>Worked with team members to ensure key client data in the database was up to date and accurate.</li>
                                <br />
                            </div>
                        </div>

                        <div className="relative pl-10">
                       <div className="absolute left-3 top-1 w-2.5 h-2.5 bg-gray-600 rounded-full z-10"></div>
                            <h1 className=" top-0 font-bold lg:text-xl">Cybersecurity Underwriting Intern</h1>
                            <h3 className="text-xl italic">June 2025 - August 2025 | New York, New York</h3>
                            <div className="text-xs sm:text-sm md:text-md lg:text-lg">
                                <h5>Collaborated closely with the Cyber Underwriting department in New York.</h5>
                                <li>Presented data on the Excess & Surplus (E&S) wholesale market, including analysis of key competitors.</li>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
}
export default ExperiencePage;