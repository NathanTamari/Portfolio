import ProjectDisplay from "../components/ProjectDisplay";
import { useContext, useEffect } from "react";
import RefContext from '../context/RefContext';
import backdrop from '../pics/mountains6.jpeg';
import taskmanager from '../pics/task-manager.gif';
import budgetCreater from '../pics/budget-Creater.gif';

function ProjectPage() {
    const { refMap, appendPageRef } = useContext(RefContext);
    const valueForRef = refMap.get("Projects");

    useEffect(() => {
        if(valueForRef) {
            appendPageRef("Projects-Height", valueForRef.current.offsetTop);
        } // eslint-disable-next-line
    }, [valueForRef])
    
    return (
        <div ref={valueForRef}>
            <h1 className="absolute w-full text-center z-20 text-xl text-black font-extrabold">
                Projects
            </h1>

            <img src={backdrop} 
                alt="Backdrop"
                className='absolute w-full min-h-screen object-cover z-0' 
            />    
            
            <div className='relative gap-16 p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10'>
                <ProjectDisplay 
                    projectGif={taskmanager}
                    name="Task Manager"
                    description="Project that allows you to add, edit, delete, and sort tasks that you 
                    create. You can mark them as done, set and change due dates, priority levels, descriptions and names."
                />

                <ProjectDisplay 
                    projectGif={budgetCreater}
                    name="I show speed"
                    description="I smoke weed"
                />

                <ProjectDisplay
                    projectGif={budgetCreater}
                    name=" My friend, Darren Jason Watkins Jr."
                    description="ishowspeed does backflip."
                />

                <ProjectDisplay 
                    projectGif={budgetCreater}
                    name="I show speed"
                    description="I smoke weed"
                />
            </div>
        </div>
    )
}

export default ProjectPage;