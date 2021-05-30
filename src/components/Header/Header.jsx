import React, {useState} from 'react';
import s from './Header.module.css';
import github from './../../images/github.png';
import {getUserThunk} from '../../store/appReducer';
import {connect} from 'react-redux';

const Header = ({getUserThunk}) => {
    const [login, setLogin] = useState('');
    const getUser = (e) => {
        e.preventDefault();
        if (login !== '') {
            getUserThunk(login);
            setLogin('')
        }
    }
    return <div className={s.header}>
        <img src={github} alt='github'/>
        <form onSubmit={getUser}>
            <input type='text'
                   value={login}
                   onChange={(e) => setLogin(e.target.value.toLowerCase())}
                   placeholder='Enter GitHub username'/>
        </form>
    </div>
}

export default connect(null, {getUserThunk})(Header)