import React from 'react';
import s from './Header.module.css';
import github from './../../images/github.png';

export const Header = () => {
    const getUser = (e) => {
        if (e.code === 'Enter') {
            window.location.href = `/profile/${e.target.value}`;
            e.target.value = ''
        }
    }
    return <div className={s.header}>
        <img src={github} alt='github'/>
        <input type='text' onKeyPress={getUser} placeholder='Enter GitHub username'/>
    </div>
}