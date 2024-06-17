import FilterInputSelect from '../../components/filter-input-select/filter-input-select';
import FilterInputText from '../../components/filter-input-text/filter-input-text';
import './home.css';
import Card from '../../components/card/card';
import useCharacters from '../../hooks/characters';
import IconButton from '../../components/icon-button/icon-button';
import BanIcon from '../../components/icons/ban-icon';
import SimpleButton from '../../components/simple-button/simple-button';
import Loading from '../../components/loading/loading';
import Header from '../../components/header/header';
const SPECIES = [{ label: "All", value: '' }, { label: 'Human', value: 'human' }, { label: 'Alien', value: 'alien' }]
const STATUSES = [{ label: "All", value: '' }, { label: 'Alive', value: 'Alive' }, { label: 'Dead', value: 'Dead' }, { label: 'Unknown', value: 'unknown' }]
function Home() {

    const { characters, setName, setSpecie, setStatus, clearFilters, name, specie, status, pagination, prevPage, nextPage, isLoading } = useCharacters()

    return <main>
        <Header>
            <div className='header__filters'>
                <FilterInputText label={'Search by name'} inputChange={setName} value={name}/>
                <FilterInputSelect label={'Search by species'} options={SPECIES} inputChange={setSpecie} value={specie} key={'specie'}/>
                <FilterInputSelect label={'Search by status'} options={STATUSES} inputChange={setStatus} value={status} key={'status'}/>
                <IconButton clickHandler={clearFilters}>
                    <BanIcon />
                </IconButton>
            </div>
        </Header>

        <section className='paginator'>
            <SimpleButton click={prevPage} disabled={isLoading || !pagination.prev}>Prev</SimpleButton>
            <SimpleButton click={nextPage} disabled={isLoading || !pagination.next}>Next</SimpleButton>
        </section>
        { isLoading && 
            <div className='loader-container'>
                <Loading/>
            </div>
        }
        { !isLoading &&
            <section className="characters">
                {
                    (characters ?? []).map((character) => {
                        return <Card character={character} key={character.id} className="characters__item"/>
                    })
                }
            </section>
        }

    </main>
}

export default Home;