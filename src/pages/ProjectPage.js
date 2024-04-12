import ProjectDisplay from "../components/ProjectDisplay";
import { useContext, useEffect } from "react";
import RefContext from '../context/RefContext';
import taskmanager from '../pics/task-manager.gif';
import budgetCreater from '../pics/budget-Creater.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectPage() {
    AOS.init();
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Projects");

    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Projects-Height", valueForRef.current.offsetTop);
        } // eslint-disable-next-line
    }, [valueForRef])
    
    return (
        <div ref={valueForRef}>
            <div className="relative bg-cream min-h-screen">
                <div className="top-0 w-full text-center lg:text-3xl md:text-2xl sm:text-xl pt-20" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                    <h1>Projects</h1>
                </div>
                <div className='top-0 gap-16 pt-20 p-10 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 z-10 overflow-y-scroll max-h-[calc(100%)]'>
                    <div className="cursor-pointer" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-delay="500" data-aos-duration="750">
                        <ProjectDisplay 
                            projectGif={taskmanager}
                            name="Task Manager"
                            description="Task manager with functionality to add, edit, delete, and sort tasks. Also can be tagged with completion status, due dates, priority levels, descriptions and names."
                            languages={[
                                { lang: "Python", p: 100, color: "bg-blue-400" },
                            ]}
                        />
                    </div>

                    <div className="cursor-pointer" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay="900" data-aos-duration="750">
                        <ProjectDisplay 
                            projectGif={budgetCreater}
                            name="Net Worth Growth Calculator"
                            description="About
                            Calculator used to determine how many years it will take to reach a given financial goal given 6 different factors (made using Java swing)"
                            languages={[
                                { lang: "Java", p: 100, color: "bg-orange-300" },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ProjectPage;