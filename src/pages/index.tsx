import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({ level, challengesCompleted, currentExperience }: IHomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >  
      <div className={styles.container}>

            <Head>
              <title>Início | move.it</title>
            </Head>

            <ExperienceBar />

            <CountdownProvider>
              <section>
                <div>
                  <Profile/>
                  <CompletedChallenges/> 
                  <Countdown />          
                  </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  // todos os cookies da nossa aplicação.
  const { level, currentExperience, challengesCompleted } = req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
