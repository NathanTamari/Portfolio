function LanguageList({ languages }) {
    return (
        <div className="flex">
            {languages.map((element, index)=>(
                <div className="flex items-center mr-4">
                    <div className={`w-3 h-3 rounded-sm mt-1.5 mr-1 ${element.color}`}/>
                    <p className='text-xs pt-1.5' key={index}>{element.lang}: {element.p}%</p>
                </div>
            ))}
        </div>
    );
}

export default LanguageList;