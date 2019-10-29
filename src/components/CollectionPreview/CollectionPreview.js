import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

import "./collection_preview.scss";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, index) => index < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    );
}

export default CollectionPreview;