import React from 'react';
import s from './EmptyPages.module.css';
import findicon from './../../images/findicon.png';

export const FindPage = () => {
    return <div className={s.emptyPage}>
        <img src={findicon} alt='findicon'/>
        <p>
            Start with searching<br/>a GitHub user
        </p>
    </div>
}