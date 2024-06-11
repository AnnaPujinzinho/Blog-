import styles from "./sobreMim.module.css";

import PostModelo from "componentes/postModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";


export default function SobreMim() {
    return (
        <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Anna!
            </h3>

            <img
                src={fotoSobreMim}
                alt="A mais Linda"
                className={styles.fotoSobreMim}
            />

           <p className={styles.paragrafo}> Oi,tudo bem? Eu sou estudante de Serviço Social e no ano passado comecei a me aventurar no mundo da programação. </p>

           <p className={styles.paragrafo}>Agora, estou fazendo um curso na área e descobrindo novas habilidades. Estou animada com as possibilidades que essa combinação pode trazer!</p>

           <p className={styles.paragrafo}> A paixão pelos jogos indie e a criação de sites me motivam constantemente a permanecer na área da programação. </p>
            
           <p className={styles.paragrafo}> A liberdade criativa proporcionada por ambos os campos me desafia a explorar novas ideias e soluções. </p>

           <p className={styles.paragrafo}> Além disso, a interseção entre sociologia e programação acrescenta uma dimensão emocionante, permitindo-me compreender melhor os sistemas sociais e traduzi-los para experiências digitais significativas.</p>

           <p className={styles.paragrafo}> Essa fusão de interesses traz uma profunda sensação de felicidade e realização, impulsionando minha jornada como programadora.</p>
        </PostModelo>
    )
}