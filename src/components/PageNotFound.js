import React from 'react';
import '../styles/stylenotfound.css'
const PageNotFoundComponent = () => {
    return (
        <div id='notfound'>
            <img src={require('../imgs/404.png')} alt='Page Not Found'/>
        </div>
    );
};

export default PageNotFoundComponent;