import { useLocation } from 'react-router-dom';
import IndividualProjectPage from '../pages/IndividualProjectPage';

function IndividualProject() {
    const location = useLocation();
    let projectName = location.pathname.substring('/IndividualProject/'.length);
    projectName = projectName.replace(/%20/g, " ");

    return (
        <div>
            <IndividualProjectPage name={projectName}/>
        </div>
    );
}

export default IndividualProject;