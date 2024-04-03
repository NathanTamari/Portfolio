import LanguageList from "./LanguageList";

function BarGraph({ languages }) {

    return (
        <div>
            <div className="w-full h-3 bg-inherit rounded-full overflow-hidden">
                {languages.map((element, index) => (
                    <div key={index} style={{ width: `${element.p}%`, }} className={`h-full float-left ${element.color}`}>
                    </div>
                ))}
            </div>
            <LanguageList languages={languages}/>
        </div>
    )
};

export default BarGraph;