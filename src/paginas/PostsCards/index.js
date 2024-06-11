import './posts.css';
import styles from './posts.module.css'

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModelo from "componentes/postModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'paginas/naoEncontrada';
import PaginaPadrao from 'componentes/paginaPadrao';
import Post from 'componentes/Post';

export default function PostCard() {
    const parametros = useParams();

    const post = posts.find(post => post.id === Number(parametros.id));
    
    if(!post) {
        return <NaoEncontrada/>
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number (parametros.id))
        .sort((a,b) => b.id - a.id)
        .slice(0,4);

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
            <Route index element={<PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
            </div>

        <h2 className={styles.tituloOutrosPosts}>
            Outros posts que você pode gostar:
        </h2>

        <ul className={styles.postsRecomendados}>
            {postsRecomendados.map((post) => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}

        </ul>

        </PostModelo>}/>

            </Route>
            
        </Routes>
        
    )
}