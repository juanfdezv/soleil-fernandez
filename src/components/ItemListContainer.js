import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
import { getProducts } from '../mock/mockApi.js';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProducts
            .then(res => setProductList(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    });
    
    return (
        <div style={{ paddingTop: 50 }}>
            {loading ? <p>Cargando...</p> : <ItemList productList={productList} />}
        </div>
    );
}

export default ItemListContainer;