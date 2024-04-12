import { useContext, useEffect } from "react";
import RefContext from '../context/RefContext';

function ContactPage() {
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Contact");
    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Contact-Height", valueForRef.current.offsetTop);
        } // eslint-disable-next-line
    }, [valueForRef])

    return (
        <div ref={valueForRef} className="bg-cream min-h-screen">
            <div className="top-0 w-full bg-cream text-center lg:text-3xl md:text-2xl sm:text-xl lg:pt-20 sm:pt-8">
                    <h1>Contact:</h1>
                    <h3 className="text-yellow-500">under construction</h3>
            </div>
        </div>
    );
}

export default ContactPage;


