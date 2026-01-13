import { useContext, useEffect } from "react";
import RefContext from "../context/RefContext";
import AOS from "aos";

function ContactPage() {
    AOS.init();

    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Contact");

    useEffect(() => {
        if (valueForRef) {
            appendPageRef("Contact-Height", valueForRef.current.offsetTop);
        } // eslint-disable-next-line
    }, [valueForRef]);

    const email = "nathan.tamari@gmail.com"; // change if needed

    return (
        <div
            ref={valueForRef}
            className="bg-cream flex flex-col items-center justify-center"
        >
            {/* Section title */}
            <div
                className="top-0 w-full bg-cream text-center lg:text-3xl md:text-2xl sm:text-xl lg:pt-20 sm:pt-8"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-easing="ease-out-cubic"
            >
                <h1 className="font-bold">Contact</h1>
            </div>

            {/* Box */}
            <div
                className="relative flex flex-col justify-center items-center min-h-64 min-w-96 bg-blue-200 m-24 rounded-3xl text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
            >
                <h2 className="font-bold lg:text-2xl md:text-xl">
                    Get in touch
                </h2>

                <p className="mt-4 lg:text-lg">
                    Contact me here:
                </p>

                <a
                    href={`mailto:${email}`}
                    className="mt-4 lg:text-xl font-bold text-blue-900 hover:underline"
                >
                    {email}
                </a>

                <p className="mt-6 text-sm text-gray-600">
                    I typically respond within 24–48 hours.
                </p>
            </div>
        </div>
    );
}

export default ContactPage;
