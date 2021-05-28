import React from 'react';
import s from './Profile.module.css';
import twousers from './../../images/twousers.png';
import oneuser from './../../images/oneuser.png';

export const Description = ({data}) => {
    return <div className={s.description}>
        <img src={data.avatar_url} alt='avatar' className={s.avatar}/>
        <h2>{data.name}</h2>
        <p className={s.login}>
            <a href={data.html_url} target='_blank' rel='noopener noreferrer'>{data.login}</a>
        </p>
        <p className={s.followers}>
            <span className={s.icon2}><img src={twousers} alt='icon2'/> {data.followers > 1000
                ? ((data.followers / 1000).toFixed(1) + 'k')
                : data.followers} followers </span>
            <span className={s.icon1}><img src={oneuser} alt='icon1'/> {data.following > 1000
                ? ((data.following / 1000).toFixed(1) + 'k')
                : data.following} following</span>
        </p>
    </div>
}