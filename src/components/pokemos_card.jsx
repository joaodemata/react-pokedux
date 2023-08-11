import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useDispatch } from 'react-redux';
import { StarButton } from './star_button';
import { setFavorite } from '../slices/data.slice';

const PokemonCard = ({name, image, types, id, favorite}) => {
    const dispatch = useDispatch()

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}));
    }

    return (
        <Card title={name} 
        cover={<img src={image} alt={name}/>}
        extra={<StarButton isFavorite={favorite} onClick={()=> handleOnFavorite()}/>} >
            <Meta description={types}/>
        </Card>
    )
};

export { PokemonCard };