import { useContext } from "react";
import RefContext from "../context/RefContext";
import backgroundVideo from '../pics/mountains4.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
    AOS.init();
    const { refMap } = useContext(RefContext);
    const valueForRef = refMap.get("Home");
    // video background

    return (
        <div ref={valueForRef} >
            <video autoPlay loop muted id="video" className="min-h-screen w-full object-cover"> 
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
                className="absolute top-0 w-full text-center text-xl pt-52 font-extrabold" >
                <h1>nathantamari.com</h1>
            </div>
        </div>
    )
}

export default HomePage;