import { useContext, useEffect } from "react";
import RefContext from "../context/RefContext";
import AOS from "aos";
import UMDpic from '../pics/umdpng.png';

function EducationPage() {
    AOS.init();
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Education");
    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Education-Height", valueForRef.current.offsetTop)
        } // eslint-disable-next-line
    }, [valueForRef])

        return (
            <div ref={valueForRef} className="bg-cream flex flex-col items-center justify-center">
                    <div className="top-0 w-full bg-cream text-center lg:text-3xl md:text-2xl sm:text-xl lg:pt-20 sm:pt-8" data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-cubic">
                        <h1 className="font-bold">Education</h1>
                    </div>
                <div className= "relative flex justify-center items-center min-h-96 min-w-96 max-h-min bg-blue-200 m-24 rounded-3xl" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                    <img src={UMDpic} alt="UMD logo" className="max-h-48 left-0 m-6"/>
                    <div className="flex-col m-6 lg:text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        <h1 className=" top-0 font-bold lg:text-xl">B.S. Computer Science</h1>
                        <h3 className="pt-4">University of Maryland - College Park</h3>
                        <h3 className="pt">Expected Graduation: May 2026</h3>
                        <h3 className="pt">Cummulative GPA: 3.56</h3>
                    </div>
                   
                </div>
            </div>
        )
}
export default EducationPage;