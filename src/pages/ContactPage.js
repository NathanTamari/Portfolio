import { useContext, useEffect, useRef, useState } from "react";
import RefContext from '../context/RefContext';
import emailjs from '@emailjs/browser';
import AOS from "aos";

function ContactPage() {
    AOS.init();
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Contact");
    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Contact-Height", valueForRef.current.offsetTop);
        } // eslint-disable-next-line
    }, [valueForRef])

    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_8gund04', 'template_ty87y0r', form.current, {
            publicKey: '_KCBkL91ExsrUvEBA',
        })
        .then(
            () => {
            setIsSent(true);
            setTimeout(() => {
                setIsSent(false);
            }, 3000);
            e.target.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };


    return (
        <div ref={valueForRef} className="bg-cream min-h-screen">
            {isSent && (
                <div className="fixed top-20 right-4 bg-green-500 text-white px-10 py-2 rounded shadow-lg">
                    Sent!
                </div>
            )}
            <div className="top-0 w-full bg-cream text-center lg:text-3xl md:text-2xl sm:text-xl lg:pt-20 sm:pt-8" data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-out-cubic">
                    <h1 className="font-bold">Contact:</h1>
                    <div className= " flex justify-center min-h-96 min-w-96 mr-12 ml-12 max-h-min bg-gray-300 rounded-3xl" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="m-10 space-x-4">
                                <label>Name</label>
                                <input size={30} className="bg-gray-200 text-md p-2" type="text" name="user_name" />
                            </div>

                            <div className="m-10 space-x-4">
                                <label>Email</label>
                                <input type="email" name="user_email" size={30} className="bg-gray-200 text-md p-2"  />
                            </div>

                            <div className="m-10 space-x-4 flex items-center"> 
                                <label>Message</label>
                                <textarea name="message" className="bg-gray-200 text-sm w-[300px] p-5"/>
                            </div>

                            <div className="opaque bg-gray-400 m-1 p-1 m-10">
                            <input type="submit" value="Send" />
                            </div>
                            
                        </form>
                    </div>
                    
            </div>
        </div>
    );
}

export default ContactPage;


