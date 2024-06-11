import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Oi, sou a Ana Júlia! Uma nerdzinha que ama romance, séries e quadrinhos, e estou me aventurando como programadora iniciante de front-end. Vem conferir minhas paixões e projetos! 💻❤️📚
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido} src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto da mais linda'
                />
            </div>
        </div>
    )
}