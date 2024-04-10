import { useContext, useEffect } from "react";
import RefContext from '../context/RefContext';
import pic1 from '../pics/mountains6.jpeg'

function SkillsPage() {
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Skills");
    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Skills-Height", valueForRef.current.offsetTop);
        } // eslint-disable-next-line
    }, [valueForRef])

    return (
        <div ref={valueForRef}>
             <img src={pic1} 
                    alt="Backdrop"
                    className='w-full min-h-screen object-cover z-0' 
                />    
        </div>
    );
}

export default SkillsPage;


