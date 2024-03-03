import { useContext } from "react";
import RefContext from "../context/RefContext";
import backgroundVideo from '../pics/mountains4.mp4'

function HomePage() {
    const { refMap } = useContext(RefContext);
    const valueForRef = refMap.get("Home");
    // video background

    return (
        <div ref={valueForRef} >
            <video autoPlay loop muted id="video" className="min-h-screen w-full object-cover"> 
                <source src={backgroundVideo} type="video/mp4" />
            </video>

            <div className="absolute top-0 w-full text-center text-xl pt-52 font-extrabold">
                <h1>nathantamari.com</h1>
            </div>
        </div>
    )
}

export default HomePage;