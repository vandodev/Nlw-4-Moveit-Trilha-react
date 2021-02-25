import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChallenge = true;
  return(
    <div className={styles.challengeBoxContainer}>
        {hasActiveChallenge ? (<div/>):(
            <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Avance de level completando desafios
            </p>
        </div>
        )}
    </div>
  )
}