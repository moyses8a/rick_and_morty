import './card.css'

function Card({character: { image, name, species, id }}) {

    const link = `http://localhost:3000/character/${id}`;
    return <article className='card'>
        <img src={image} alt="character" className='card__image'/>
        <div className='card__info'>            
            <h3 className='info__header'>{name}</h3>
            <span className='info__specie'>{species}</span>

            <a href={link} aria-label='more info' className='info__more-info'>More info</a>
        </div>
    </article>
}

export default Card;
