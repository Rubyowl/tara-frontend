import React from 'react';
import style from './topnav.module.css'
import {Link} from "react-router-dom";
import companyLogo from '../../assets/Köln-Logo.PNG'

const TopNav = () => {
    return (
        <div className={style.container}>
            <Link className={style.linkStyle} to="changelog" >Changelog</Link>
            <Link className={style.linkStyle} to="feature_request">Feature Request</Link>
            <img src={companyLogo} className={style.imgStyle}></img>

        </div>
    );
};

export default TopNav;
