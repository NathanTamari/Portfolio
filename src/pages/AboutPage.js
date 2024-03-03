import { useContext, useEffect } from "react";
import RefContext from "../context/RefContext";
import picofme from "../pics/picofme.png";

function AboutPage() {
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("About");
    useEffect(() => {
        if(valueForRef) {
            appendPageRef("About-Height", valueForRef.current.offsetTop)
        } // eslint-disable-next-line
    }, [valueForRef])

        return (
            <div ref={valueForRef}>
                <div className="pt-10 text-center text-xl">
                    <h1 className="font-extrabold">About</h1>
                    <img src={picofme} alt="picofme"/>
                    <img src={picofme} alt="picofme"/>
                    <img src={picofme} alt="picofme"/>
                </div>
                
            </div>

        )
}

export default AboutPage;