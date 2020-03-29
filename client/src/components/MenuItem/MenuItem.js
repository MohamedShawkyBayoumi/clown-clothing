import React from 'react';
import { withRouter } from "react-router-dom";
import "./menuitem.scss";

const MenuItem = ({title, subtitle, imageUrl, size, history, match, linkUrl}) => {
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);