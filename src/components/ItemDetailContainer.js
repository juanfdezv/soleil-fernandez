import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
import '../styles/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config.js';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "productos", itemId);
        getDoc(docRef)
            .then(doc => {
                setProductDetail({id: doc.id, ...doc.data()});
            })
            .finally(() => {
                setLoading(false);
            })
    }, [itemId]);

    return(
        <div className="item-detail-container">
            {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail} />}
        </div>
    );
}

export default ItemDetailContainer;
