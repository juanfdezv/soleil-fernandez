import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
import { getProducts } from '../mock/mockApi.js';
import '../styles/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts
            .then(res => setProductDetail(res.find(item => item.id === Number(itemId))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    },[itemId]);
    return(
        <div className="item-detail-container">
            {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail} />}
        </div>
    );
}

export default ItemDetailContainer;
