import './character.css'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../../components/header/header';
import Loading from '../../components/loading/loading';
import SimpleButton from '../../components/simple-button/simple-button';

function Character() {
    const [character, setCharacter] = useState(null)
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((response) => {
                setCharacter(response)
            })

            console.log('called');
    }, [id])

    if (!character) {
        return <Loading/> }


    return <main className="character-container">
        <Header>
            <SimpleButton click={() => navigate('/')}>Volver</SimpleButton>
        </Header>
        <section className='character'>
            <img src={character.image} alt="character" />
            <article className="info">
                <h2>{character.name}</h2>
                <div className="field">
                    <span className="label">Gender: </span>
                    <span className="text">{character.gender}</span>
                </div>
                <div className="field">
                    <span className="label">Specie: </span>
                    <span className="text">{character.species}</span>
                </div>
                <div className="field">
                    <span className="label">Status: </span>
                    <span className="text">{character.status}</span>
                </div>
                <div className="field">
                    <span className="label">Origin: </span>
                    <span className="text">{character.origin?.name || 'unknown'}</span>
                </div>
                <div className="field">
                    <span className="label">Location: </span>
                    <span className="text">{character.location?.name || 'unknown'}</span>
                </div>
            </article>
        </section>
    </main>
}

export default Character;