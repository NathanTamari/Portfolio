import { createContext, useState } from "react";

const RefContext = createContext();

function Provider({ children }) {
    const [refMap, setMap] = useState(new Map());

    const appendPageRef = (pageName, pageRef) => {
        setMap(prevMap => {
            const newMap = new Map(prevMap);
            newMap.set(pageName, pageRef);
            return newMap;
        })
    };

    const valueToShare = {
        refMap,
        appendPageRef,
    }

    return <RefContext.Provider value={valueToShare}>
        {children}
    </RefContext.Provider>
}

export { Provider };
export default RefContext;