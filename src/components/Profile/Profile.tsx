import eu from '../../assets/Eu.png'
import styles from './Profile.module.css'

export function Profile() {
  return (
    <div className={styles.container}>
      <img src={eu} alt="eu" />
      <div className={styles.main}>
        <h2>Marcos Vinicius</h2>
        <p>
          Meu nome é Marcos, sou formado em Técnico em Secretariado pela
          Faculdade Processus de Brasília e, além disso, tenho formação em
          Desenvolvimento Full-Stack.
        </p>

        <ul className={styles.lista}>
          <li>
            <a
              href="https://www.linkedin.com/in/marcos-vinicius-080659117/"
              target="blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/Marcos-vvc" target="blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://mv-dv-marcos-vvc.vercel.app" target="blank">
              Portfólio
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
