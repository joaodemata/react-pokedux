import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchPokemons } from '../slices/data.slice';

const Searcher = () => {
    const dispatch = useDispatch();
    const handleOnChange = (_search) => {
        dispatch(setSearchPokemons(_search));
    }

    return <Input.Search placeholder='Buscar...' onChange={(event)=> handleOnChange(event.target.value)} style={{marginBottom: 10}}/> 
}

export {Searcher}
