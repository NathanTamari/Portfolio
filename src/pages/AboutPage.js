import { useContext, useEffect } from "react";
import RefContext from "../context/RefContext";
import snowvid from "../pics/snowvid.mp4";

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
                <div className="text-center relative text-xl">
                    <h1 className="absolute w-full text-center z-20 text-xl text-black font-extrabold">About</h1>
                    <video autoPlay loop muted id="video" className="min-h-screen w-full object-cover relative"> 
                        <source src={snowvid} type="video/mp4" />
                    </video>
                </div>
                
            </div>

        )
}

export default AboutPage;