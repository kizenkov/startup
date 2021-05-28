import React from 'react';
import s from './EmptyPages.module.css';
import notfoundicon from './../../images/notfoundicon.png';

export const NotFoundPage = () => {
    return <div className={s.emptyPage}>
        <img src={notfoundicon} alt='notfoundicon'/>
        <p>
            User not found
        </p>
    </div>
}