import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
import { getProducts } from '../mock/mockApi.js';
import '../styles/ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProducts
            .then(res => setProductDetail(res.find(item => item.id === '003')))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    },[]);
    return(
        <div className="item-detail-container">
            {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail} />}
        </div>
    );
}

export default ItemDetailContainer;
