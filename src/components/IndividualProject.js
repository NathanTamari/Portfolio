import { useRoute } from 'wouter';
import IndividualProjectPage from '../pages/IndividualProjectPage';

function IndividualProject() {
    const [match, params] = useRoute("/IndividualProject/:projectName");
    const { projectName } = params;
    const decodedName = decodeURIComponent(projectName);

    if (!match) {
        return null;
    }
    
    return (
        <div>
            <IndividualProjectPage name={decodedName}/>
        </div>
    );
}

export default IndividualProject;