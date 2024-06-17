import { useEffect, useState } from "react";
const endpoint = 'https://rickandmortyapi.com/api/character';

function useCharacters() {
    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');
    const [status, setStatus] = useState('');
    const [characters, setCharacters] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        next: '',
        prev: '',
        page: 1
    });

    useEffect(() => { 
        const delayDebounceFn = setTimeout(() => {
            setLoading(true)
            fetch(endpoint + '/?' + new URLSearchParams({
                name: name,
                status: status,
                species: specie,
                page: pagination.page,
                count: 10
            }))
            .then((response) => response.json())
            .then(({ info: { prev, next }, results }) => {
                setPagination((pgt) => ({ ...pgt, prev, next }))
                setCharacters(results);
                setLoading(false)
            })
        }, 200);
        return () => clearTimeout(delayDebounceFn);
    }, [specie, status, name, pagination.page])

    const clearFilters = () => {
        setName('');
        setSpecie('');
        setStatus('');
    }

    const nextPage = () => setPagination((current) =>  ({ ...current, page: current.next ? current.page + 1 : current.page }))
    const prevPage = () => setPagination((current) =>  ({ ...current, page: current.prev ? current.page - 1 : current.page }))

    return {
        characters,
        setName,
        setSpecie,
        setStatus,
        clearFilters,
        name,
        specie,
        status,
        pagination,
        nextPage,
        prevPage,
        isLoading
    }
}

export default useCharacters;