import React from 'react';
import '../styles/stylenotfound.scss'
const PageNotFoundComponent = () => {
    return (
        <div className="notfound">
            <img src={require('../imgs/404.png')} alt='Page Not Found'/>
        </div>
    );
};

export default PageNotFoundComponent;