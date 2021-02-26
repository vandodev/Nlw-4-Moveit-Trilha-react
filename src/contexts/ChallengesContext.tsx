import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextData {
    level: number; 
    currentExperience: number 
    challengesCompleted: number;
    experienceToNextLevel:number;
    // activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    // resetChallenge: () => void;
    // completeChallenge: () => void;
  }
  

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    function levelUp(){
      setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log('new challenger');
    }

    return(
        <ChallengesContext.Provider
         value={{
             level,
             currentExperience,
             challengesCompleted,
             startNewChallenge,
             levelUp}}>
            {children}
        </ChallengesContext.Provider>
    );
}