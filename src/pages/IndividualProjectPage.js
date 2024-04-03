function IndividualProjectPage ({ name }) {
    let feature1, feature2, feature3 = null;
    if (name === "Net Worth Growth Calculator") {

    }

    return (
        <div className="max-h-screen">
            <div className="text-xl p-20 bg-blue-500 text-center font-bold">
                <p>{name}</p>
            </div>

            <div className="text-l p-96 pt-max bg-gray-300 text-center max-h-screen">
                <div>
                    <img src="feature1" alt="feature 1"></img>
                </div>
            </div>
        </div>
    )
}

export default IndividualProjectPage;