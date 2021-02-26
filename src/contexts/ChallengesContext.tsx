import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
    children: ReactNode
}

export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setLevel] = useState(1);

    function levelUp(){
      setLevel(level + 1);
    }

    return(
        <ChallengesContext.Provider value={{level, levelUp}}>
            {children}
        </ChallengesContext.Provider>
    );
}