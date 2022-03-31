import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
import { getProducts } from '../mock/mockApi.js';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts
            .then(res => {
                if(categoryId){
                    setProductList(res.filter(prod => prod.category === categoryId));
                }else{
                    setProductList(res);
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);
    
    return (
        <div style={{ paddingTop: 50 }}>
            {loading ? <p>Cargando...</p> : <ItemList productList={productList} />}
        </div>
    );
}

export default ItemListContainer;