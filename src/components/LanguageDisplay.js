function LanguageDisplay({ name, img }) {
    return (
        <div>
            <img src={img} alt="Java"/>
            <h1>{name}</h1>
        </div>
    )
}

export default LanguageDisplay;