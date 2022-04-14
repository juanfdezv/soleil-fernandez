import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config.js';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos");
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef;

        getDocs(q)
            .then(res => {
                const items = res.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setProductList(items);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [categoryId]);
    
    return (
        <div style={{ paddingTop: 50 }}>
            {loading ? <p>Cargando...</p> : <ItemList productList={productList} />}
        </div>
    );
}

export default ItemListContainer;