import React from 'react';
import s from './EmptyPages.module.css';
import emptyrepos from './../../images/emptyrepos.png';

export const EmptyRepositories = () => {
    return <div className={s.emptyPage}>
        <img src={emptyrepos} alt='emptyrepos'/>
        <p>
            Repository list is empty
        </p>
    </div>
}