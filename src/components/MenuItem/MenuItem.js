import React from 'react';
import "./menuitem.scss";

const MenuItem = ({title, subtitle, imageUrl, size}) => {
    return (
        <div className={`menu-item ${size}`}>
            <div className="background-image" style={{
                backgroundImage: `url('${imageUrl}')`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    );
}

export default MenuItem;