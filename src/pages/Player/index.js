import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ximeneskai/cinetag-apijson/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    if (!video) {
        return <NaoEncontrada />
    }

    // Verifica se o link do YouTube está correto e converte para o formato de incorporação
    const embedLink = video.link.includes('youtube.com') ? 
        video.link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/') : 
        video.link;

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={embedLink}  // Usa o link de incorporação do YouTube
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;
