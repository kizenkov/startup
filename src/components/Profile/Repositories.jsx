import React from 'react';
import s from './Profile.module.css';
import {EmptyRepositories} from '../EmptyPages/EmptyRepositories';

export const Repositories = ({data, repos}) => {
    return <div className={s.repositories}>
        {data.public_repos ?
            <div>
                <h1>Repositories ({data.public_repos})</h1>
                {repos.map(repos => (
                    <div className={s.repos} key={repos.id}>
                        <a href={repos.url} target='_blank' rel='noopener noreferrer'
                           className={s.link}>{repos.name}</a>
                        <span className={s.linkDescription}>{repos.description}</span>
                    </div>))}
            </div>
            : <EmptyRepositories/>}
    </div>
}