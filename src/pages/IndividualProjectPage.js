import proj1_1 from '../pics/proj1-1.png';
import proj1_2 from '../pics/proj1-2.png';
import proj1_3 from '../pics/proj1-3.png';
import proj2_1 from '../pics/proj2-1.png';
import proj2_2 from '../pics/proj2-2.png';
import proj2_3 from '../pics/proj2-3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function IndividualProjectPage ({ name }) {
    AOS.init();
    let feature1, feature2, feature3 = null;
    if (name === "Net Worth Growth Calculator") {
        feature1 = proj1_1;
        feature2 = proj1_2;
        feature3 = proj1_3
    } else if (name === "Task Manager") {
        feature1 = proj2_1;
        feature2 = proj2_2;
        feature3 = proj2_3;
    }

    return (
        <div>
            <div className="text-xl p-20 bg-blue-200 text-center border-b-8 border-blue-800 font-bold">
                <p>{name}</p>
            </div>

            <div className="bg-pink-200">
                <div className='relative gap-16 grid sm:grid-cols-1 md:grid-cols-2 p-24'>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <img src={feature1} alt="feature 1" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <img src={feature2} alt="feature 2" />
                    </div>
                    
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src={feature3} alt="feature 3" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default IndividualProjectPage;