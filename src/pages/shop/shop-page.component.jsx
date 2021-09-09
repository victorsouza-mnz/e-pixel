import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import './shop-page.styles.scss'
import SHOP_DATA from "./shop.data";

const ShopPage = () => {

    const [shopData] = useState(SHOP_DATA)

    return (
        
        <div className='shop-page'>
            {
                shopData.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)
            }
        </div>
        
    )
}

export default ShopPage