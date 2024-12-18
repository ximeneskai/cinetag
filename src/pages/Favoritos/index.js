import Banner from 'components/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
    return (
        <>
        <Banner imagem='favoritos'/>
            <Titulo>
                <h1>Meus favoritos:</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='gato bonifacio' capa='https://www.designi.com.br/images/preview/11134265.jpg'/>
            </section>
        </>
    )
}

export default Favoritos;